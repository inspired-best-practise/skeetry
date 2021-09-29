import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Text } from 'react-native';

import { tTitle } from '_app/constants';
import { useTagsQuery } from '_app/generated/graphql';

import { CategoriesSkeleton } from '../CategoriesSkeleton';
import { Category } from './Category';
import { s } from './styles';

export const Categories = () => {
  const { t } = useTranslation();
  const [loadingCounter, setLoadingCount] = useState(0);

  const { data, loading, error } = useTagsQuery();

  useEffect(() => {
    if (!loading) {
      setLoadingCount(1);
    }
  }, [loading]);

  const categories = data?.tags;

  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={tTitle}>{`${t('home:categories')}`}</Text>
      </View>
      {loadingCounter === 0 && <CategoriesSkeleton />}
      {loadingCounter > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.categoryWrapper}>
          {categories!.map(category => (
            <Category key={category.id} item={category} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
