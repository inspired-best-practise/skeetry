/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import { stores } from '_app/store';
import { LoadingOverlay } from '_app/components';
import RootStackNavigation from '_app/navigations';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider {...stores}>
      <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
      <RootStackNavigation />
      <LoadingOverlay />
    </Provider>
  );
};

export default App;
