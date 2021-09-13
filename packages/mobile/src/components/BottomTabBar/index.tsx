import { BlurView } from '@react-native-community/blur';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

import { PLATFORM } from '_app/constants';

const { IS_IOS } = PLATFORM;

// layout is stored as module variable
let tabBarLayout = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

// there is exported way to get current tabbar height
export function getTabBarHeight() {
  return tabBarLayout.height;
}

// there is simple tab bar component used when creating navigator that will update this layout
export function TabBarComponent(props: BottomTabBarProps) {
  return (
    <View
      collapsable={false}
      onLayout={event => {
        tabBarLayout = event.nativeEvent.layout;
      }}
    >
      {IS_IOS ? (
        <View>
          <BottomTabBar {...props} />
        </View>
      ) : (
        <View>
          <BottomTabBar {...props} />
        </View>
      )}
    </View>
  );
}
