import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, useColorScheme, SafeAreaView } from 'react-native';

import { Avatar } from '_app/components';
import MenuItem from '_app/components/MenuItem/MenuItem';
import { colors, darkColor, radius, tBase, whiteColor } from '_app/constants';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';

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
            marginBottom: 10,
            backgroundColor: theme === 'dark' ? colors.gray800 : colors.gray100,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 20,
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
          {user.name && (
            <Text
              numberOfLines={1}
              style={[tBase, { paddingTop: 5, fontWeight: '600' }, theme === 'dark' ? whiteColor : darkColor]}
            >
              {user.name}
            </Text>
          )}
          {user.bio && (
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
          <Text
            style={[tBase, { position: 'absolute', top: 10, right: 10 }, theme === 'dark' ? whiteColor : darkColor]}
            onPress={() => navigation.push('ProfileChange')}
          >
            {t('profile:change')}
          </Text>
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
