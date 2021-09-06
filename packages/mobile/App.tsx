/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { LoadingOverlay } from '_app/components';
import '_app/i18n';
import RootStackNavigation from '_app/navigations';
import { authStore } from '_app/stores';
import { deviceLanguage } from '_app/utils/deviceLanguage';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const token = authStore(state => state.tokens.accessToken);

  const cache = new InMemoryCache();

  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
    // uri: 'https://travel-api-production.up.railway.app/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });

  console.log(deviceLanguage);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
        <RootStackNavigation />
        <LoadingOverlay />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
