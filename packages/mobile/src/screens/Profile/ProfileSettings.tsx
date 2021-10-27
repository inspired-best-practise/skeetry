import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';

import { Avatar, ModalWrapper } from '_app/components';
import MenuItem from '_app/components/MenuItem/MenuItem';
import { colors, darkColor, radius, tBase, tSmallRegular, tTitle, whiteColor } from '_app/constants';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';

export const ProfileSettingsScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  const { loading, data } = useMeQuery();

  const user = data!.me;

  return (
    <ModalWrapper>
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
              <Avatar src={user.avatar} nickname={user.username} />
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

      <MenuItem name="notifications" icon="bell" />
      <MenuItem name="design" icon="image" />
      <MenuItem name="language" icon="globe" />
      <MenuItem name="help" icon="life-buoy" />
      <MenuItem name="info" icon="info" />
    </ModalWrapper>
  );
};
