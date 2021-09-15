import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { ProfileFilterItem } from '_app/components';
import { profileStore } from '_app/stores';

export const ProfileFilter = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const selected = profileStore(state => state.selected);

  return (
    <ScrollView
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginBottom: 15,
        paddingHorizontal: 10,
      }}
    >
      <ProfileFilterItem selected={selected} name="want" title={`${t('profile:want')}`} />
      <ProfileFilterItem selected={selected} name="visited" title={`${t('profile:visited')}`} />
      <ProfileFilterItem selected={selected} name="cities" title={`${t('profile:cities')}`} />
      <ProfileFilterItem selected={selected} name="places" title={`${t('profile:places')}`} />
    </ScrollView>
  );
};
