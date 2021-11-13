import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { ProfileFilterItem } from '_app/components';

import { s } from './styles';

export const ProfileFilter = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  return (
    <ScrollView ref={ref} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.container}>
      <ProfileFilterItem selected={'want'} name="want" title={`${t('profile:want')}`} />
      <ProfileFilterItem selected={'want'} name="visited" title={`${t('profile:visited')}`} />
      {/* <ProfileFilterItem selected={selected} name="cities" title={`${t('profile:cities')}`} />
      <ProfileFilterItem selected={selected} name="places" title={`${t('profile:places')}`} /> */}
    </ScrollView>
  );
};
