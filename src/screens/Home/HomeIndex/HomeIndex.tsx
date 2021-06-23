import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const HomeIndex = () => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 1000,
      }}
    >
      <Text>Bottom sheet</Text>
    </View>
  );
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: 'red',
        padding: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Text>Header</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Test</Text>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[770, 400]}
        enabledContentTapInteraction={true}
        enabledBottomInitialAnimation={true}
        renderContent={renderContent}
        overdragResistanceFactor={0} // ?
        enabledBottomClamp={true}
        borderRadius={10}
        // renderHeader={renderHeader}
      />
    </>
  );
};

export const HomeIndexScreen = observer(HomeIndex);
