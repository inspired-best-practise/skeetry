/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import { stores } from '_app/store';
import { LoadingOverlay } from '_app/components';

const App = () => {
  return (
    <Provider {...stores}>
      <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
      <AppNavigator />
      <LoadingOverlay />
    </Provider>
  );
};

export default App;
