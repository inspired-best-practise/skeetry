import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ModalControl } from '_app/components';
import { PLATFORM } from '_app/constants';
import { profileStore } from '_app/stores';
import { SCREEN_WIDTH } from '_app/utils/dimensions';

import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const ProfileUserScreen = ({ route }) => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const setSelected = profileStore(state => state.setSelected);

  const { user } = route.params;

  const isMe = false;

  return (
    <SafeAreaView style={s.containerUser}>
      {PLATFORM.IS_IOS && <ModalControl />}
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader(user, t, setSelected, isMe)}
        ListEmptyComponent={renderEmpty}
        numColumns={2}
        data={[]}
        columnWrapperStyle={s.listWrapper}
        contentContainerStyle={{ width: SCREEN_WIDTH }}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};
