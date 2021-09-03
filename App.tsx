/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { LoadingOverlay } from '_app/components';
import RootStackNavigation from '_app/navigations';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });

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
