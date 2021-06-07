import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { observer } from 'mobx-react';

import { s } from './styles';

export const Loading = ({ isLocal }: { isLocal?: boolean }): JSX.Element | null => {
  // in the future we will take this from store
  const loading = true;

  return loading || isLocal ? (
    <Animated.View style={[s.wrapper]}>
      <View style={[s.container]}>
        <Text>Logo</Text>
        <Text>Loader</Text>
      </View>
    </Animated.View>
  ) : null;
};

export const LoadingOverlay = observer(Loading);
