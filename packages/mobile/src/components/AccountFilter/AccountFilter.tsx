import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { AccountFilterItem } from '_app/components';

export const AccountFilter = () => {
  const { t } = useTranslation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 9,
        marginBottom: 15,
      }}
    >
      <AccountFilterItem name={`${t('Account:want')}`} />
      <AccountFilterItem name={`${t('Account:visited')}`} />
      <AccountFilterItem name={`${t('Account:countries')}`} />
      <AccountFilterItem name={`${t('Account:cities')}`} />
      <AccountFilterItem name={`${t('Account:places')}`} />
    </ScrollView>
  );
};
