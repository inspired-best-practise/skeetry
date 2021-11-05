import { ApolloProvider } from '@apollo/client';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';
import * as Sentry from '@sentry/react-native';
import React, { useEffect } from 'react';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { LoadingOverlay } from '_app/components';
import '_app/i18n';
import RootStackNavigation from '_app/navigations';
import { client } from '_app/services/graphql';
import CodePushProvider from '_app/utils/CodePushProvider';

LogBox.ignoreLogs(['Require cycle:']);

if (Config.NODE_ENV !== 'dev') {
  Sentry.init({
    dsn: Config.DSN,
    environment: Config.NODE_ENV,
  });

  // TODO: Identify Users
  // Sentry.setUser({ id: '1', username: 'user' });
}

const App: React.FC = () => {
  const theme = useColorScheme();

  useEffect(() => {
    if (theme) {
      console.log('scheme', theme);
    }
  }, [theme]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <CodePushProvider>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} animated translucent />
          <ActionSheetProvider>
            <RootStackNavigation />
          </ActionSheetProvider>
          <LoadingOverlay />
        </SafeAreaProvider>
      </ApolloProvider>
    </CodePushProvider>
  );
};

export default Sentry.wrap(connectActionSheet(App));
