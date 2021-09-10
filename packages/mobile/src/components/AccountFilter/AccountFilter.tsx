import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { AccountFilterItem } from '_app/components';
import { profileStore } from '_app/stores';

export const AccountFilter = () => {
  const { t } = useTranslation();

  const selected = profileStore(state => state.selected);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 9,
        marginBottom: 15,
      }}
    >
      <AccountFilterItem selected={selected} name="want" title={`${t('account:want')}`} />
      <AccountFilterItem selected={selected} name="visited" title={`${t('account:visited')}`} />
      <AccountFilterItem selected={selected} name="countries" title={`${t('account:countries')}`} />
      <AccountFilterItem selected={selected} name="cities" title={`${t('account:cities')}`} />
      <AccountFilterItem selected={selected} name="places" title={`${t('account:places')}`} />
    </ScrollView>
  );
};
