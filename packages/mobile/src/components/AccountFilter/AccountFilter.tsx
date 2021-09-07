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
      <AccountFilterItem name={`${t('account:want')}`} />
      <AccountFilterItem name={`${t('account:visited')}`} />
      <AccountFilterItem name={`${t('account:countries')}`} />
      <AccountFilterItem name={`${t('account:cities')}`} />
      <AccountFilterItem name={`${t('account:places')}`} />
    </ScrollView>
  );
};
