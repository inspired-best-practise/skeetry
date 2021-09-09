import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Text } from 'react-native';

import { colors, h4 } from '_app/constants';

import { Category } from './Category';
import { categories } from './categories.mock';
import { s } from './styles';

export const Categories = () => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={[h4, { color: colors.primary600 }]}>{`${t('home:categories')}`}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categoryWrapper}>
        {categories.map(category => (
          <Category key={category.id} emoji={category.emoji} title={category.title} />
        ))}
      </ScrollView>
    </View>
  );
};
