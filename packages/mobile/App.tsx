/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { ApolloProvider } from '@apollo/client';
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';
import * as Sentry from '@sentry/react-native';
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import Config from 'react-native-config';
import SplashScreen from 'react-native-splash-screen';

import { LoadingOverlay } from '_app/components';
import '_app/i18n';
import RootStackNavigation from '_app/navigations';
import { client } from '_app/services/graphql';
// import { authStore } from '_app/stores';
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
  // const setLogout = authStore(state => state.setLogout);
  useEffect(() => {
    SplashScreen.hide();
    // setLogout()
  }, []);

  return (
    <CodePushProvider>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
        <ActionSheetProvider>
          <RootStackNavigation />
        </ActionSheetProvider>
        <LoadingOverlay />
      </ApolloProvider>
    </CodePushProvider>
  );
};

export default Sentry.wrap(connectActionSheet(App));
