import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Text } from 'react-native';

import { tTitle } from '_app/constants';
import { useItemTagsQuery } from '_app/generated/graphql';

import { Category } from './Category';
import { s } from './styles';

export const Categories = () => {
  const { t } = useTranslation();

  const { data, loading, error } = useItemTagsQuery();

  const categories = data?.itemTags;

  return !error && categories && categories.length !== 0 ? (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={tTitle}>{`${t('home:categories')}`}</Text>
      </View>
      {/* TODO: add skeleton instead of text when loading  */}
      {loading ? (
        <Text style={{ margin: 20 }}>Loading...</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categoryWrapper}>
          {categories.map(category => (
            <Category key={category.id} item={category} />
          ))}
        </ScrollView>
      )}
    </View>
  ) : null;
};
