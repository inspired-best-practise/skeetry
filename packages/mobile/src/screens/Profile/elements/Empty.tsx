import React from 'react';
import { View, Text } from 'react-native';

import { colors, darkColor, tBase, tTitle, whiteColor } from '_app/constants';

export const renderEmpty = (t, theme) => {
  return (
    <View style={{ margin: 20 }}>
      <Text style={[tTitle, { textAlign: 'center', marginBottom: 5 }, theme === 'dark' ? whiteColor : darkColor]}>
        {t('profile:empty_list_title')}
      </Text>
      <Text
        style={[tBase, { textAlign: 'center', color: colors.mediumGray }, theme === 'dark' ? whiteColor : darkColor]}
      >
        {t('profile:empty_list_desc')}
      </Text>
    </View>
  );
};
