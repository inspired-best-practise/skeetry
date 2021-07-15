/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { Provider } from 'mobx-react';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { LoadingOverlay } from '_app/components';
import RootStackNavigation from '_app/navigations';
import { stores } from '_app/store';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider {...stores}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
        <RootStackNavigation />
        <LoadingOverlay />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
