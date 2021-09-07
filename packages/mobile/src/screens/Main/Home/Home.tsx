import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

import { authStore } from '_app/stores';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const user = authStore(state => state.user);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>
          {`${t('home:welcome')}`}, {user.username}
        </Text>
      </View>
    </>
  );
};
