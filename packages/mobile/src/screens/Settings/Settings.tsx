import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, useColorScheme, SafeAreaView } from 'react-native';

import { Avatar } from '_app/components';
import MenuItem from '_app/components/MenuItem/MenuItem';
import { colors, darkColor, radius, tBase, whiteColor } from '_app/constants';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  const { loading, data } = useMeQuery();

  const user = data!.me;

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10, width: '100%' }}>
        <View
          style={{
            marginTop: normalize(20),
            marginBottom: normalize(10),
            backgroundColor: theme === 'dark' ? colors.gray800 : colors.gray100,
            alignItems: 'center',
            width: '100%',
            paddingVertical: normalize(20),
            borderRadius: radius.base,
            position: 'relative',
          }}
        >
          {!loading && (
            <TouchableOpacity
              style={{ marginBottom: 10 }}
              activeOpacity={user.avatar ? 0.7 : 1}
              onPress={() =>
                user.avatar &&
                navigation.push('Avatar', {
                  image: user.avatar,
                })
              }
            >
              <Avatar src={user.avatar} username={user.username} />
            </TouchableOpacity>
          )}
          {user.bio !== null && user.name?.length !== 0 && (
            <Text
              numberOfLines={1}
              style={[tBase, { paddingTop: 5, fontWeight: '600' }, theme === 'dark' ? whiteColor : darkColor]}
            >
              {user.name}
            </Text>
          )}
          {user.bio !== null && user.bio?.length !== 0 && (
            <Text numberOfLines={1} style={[tBase, { paddingTop: 5 }, theme === 'dark' ? whiteColor : darkColor]}>
              {user.bio}
            </Text>
          )}
          {/* TODO: format phone like this +7 999 888-77-66 */}
          <Text numberOfLines={1} style={[tBase, { paddingTop: 5 }, theme === 'dark' ? whiteColor : darkColor]}>
            +{user.phone}
          </Text>
          <Text numberOfLines={1} style={[tBase, { paddingTop: 5 }, theme === 'dark' ? whiteColor : darkColor]}>
            @{user.username}
          </Text>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10 }}
            onPress={() => navigation.push('ProfileChange')}
          >
            <Text style={[tBase, theme === 'dark' ? whiteColor : darkColor]}>{t('profile:change')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MenuItem name="notifications" icon="bell" action={() => navigation.push('Notifications')} />
      <MenuItem name="appearance" icon="image" action={() => navigation.push('Appearance')} />
      <MenuItem name="language" icon="globe" action={() => navigation.push('Language')} />
      <MenuItem name="help" icon="life-buoy" action={() => navigation.push('Help')} />
      <MenuItem name="info" icon="info" action={() => navigation.push('Info')} />
    </SafeAreaView>
  );
};
