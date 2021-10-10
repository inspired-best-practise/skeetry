import React from 'react';
import { View, Text } from 'react-native';

import { colors, tBase, tTitle } from '_app/constants';

export const renderEmpty = t => {
  return (
    <View style={{ margin: 20 }}>
      <Text style={[tTitle, { textAlign: 'center', marginBottom: 5 }]}>{t('profile:empty_list_title')}</Text>
      <Text style={[tBase, { textAlign: 'center', color: colors.mediumGray }]}>{t('profile:empty_list_desc')}</Text>
    </View>
  );
};
