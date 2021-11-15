import { ApolloProvider } from '@apollo/client';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';
import * as Sentry from '@sentry/react-native';
import React, { useContext, useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import Config from 'react-native-config';

import { IconSizes } from '_app/constants';
import { AppContext, AppContextProvider } from '_app/context';
import '_app/i18n';
import { LoadingIndicator } from '_app/layout';
import RootStackNavigation from '_app/navigations';
import { client } from '_app/services/graphql';
import { DynamicStatusBar, ThemeStatic } from '_app/theme/Colors';
import CodePushProvider from '_app/utils/CodePushProvider';
import { loadThemeType } from '_app/utils/storage';

LogBox.ignoreLogs(['Require cycle:']);

if (Config.NODE_ENV !== 'dev') {
  Sentry.init({
    dsn: Config.DSN,
    environment: Config.NODE_ENV,
  });

  // TODO: Identify Users
  // Sentry.setUser({ id: '1', username: 'user' });
}

const SafeAreaApp = () => {
  const { toggleTheme } = useContext(AppContext);

  const [initializing, setInitializing] = useState(true);

  const initializeTheme = async () => {
    setInitializing(true);
    const storageTheme = await loadThemeType();
    if (storageTheme) {
      toggleTheme(storageTheme);
    }
    setInitializing(false);
  };

  useEffect(() => {
    initializeTheme();
  }, []);

  if (initializing) {
    return <LoadingIndicator color={ThemeStatic.accent} size={IconSizes.x1} />;
  }

  return <RootStackNavigation />;
};

const App = () => {
  return (
    <CodePushProvider>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <ActionSheetProvider>
            <SafeAreaApp />
          </ActionSheetProvider>
        </AppContextProvider>
      </ApolloProvider>
    </CodePushProvider>
  );
};

export default Sentry.wrap(connectActionSheet(App));
