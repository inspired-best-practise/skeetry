import React from 'react';
import { View, Text } from 'react-native';

import { colors, tBase, tTitle } from '_app/constants';

export const renderEmpty = () => (
  <View style={{ margin: 20 }}>
    <Text style={[tTitle, { textAlign: 'center', marginBottom: 5 }]}>Список пуст</Text>
    <Text style={[tBase, { textAlign: 'center', color: colors.mediumGray }]}>
      Добавьте несколько стран, городов, мест или достопримечательностей
    </Text>
  </View>
);
