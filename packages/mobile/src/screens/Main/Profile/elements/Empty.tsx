import React from 'react';
import { View, Text } from 'react-native';

import { colors, h4, paragraph } from '_app/constants';

export const renderEmpty = () => (
  <View style={{ margin: 20 }}>
    <Text style={[h4, { textAlign: 'center' }]}>Список пуст</Text>
    <Text style={[paragraph, { textAlign: 'center', color: colors.primary600 }]}>
      Добавьте несколько стран, городов, мест или достопримечательностей
    </Text>
  </View>
);
