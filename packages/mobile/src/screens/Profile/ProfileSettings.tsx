import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

import { Avatar, ModalWrapper } from '_app/components';
import MenuItem from '_app/components/MenuItem/MenuItem';
import { colors, radius, tBase, tTitle } from '_app/constants';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';

export const ProfileSettingsScreen = () => {
  const { t } = useTranslation();

  const { loading, data } = useMeQuery();

  const user = data!.me;

  return (
    <ModalWrapper>
      <View style={{ paddingHorizontal: 10, width: '100%' }}>
        <View
          style={{
            marginBottom: 10,
            backgroundColor: colors.gray100,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 20,
            borderRadius: radius.base,
            position: 'relative',
          }}
        >
          {!loading && (
            <TouchableOpacity
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
          <Text style={[tTitle, { paddingTop: 10 }]}>Aleksey</Text>
          <Text style={[tBase, { paddingTop: 4 }]}>+7 999 888-77-66</Text>
          <Text style={[tBase, { paddingTop: 4 }]}>@{user.username}</Text>
          <Text
            style={[tBase, { position: 'absolute', top: 10, right: 10 }]}
            onPress={() => navigation.push('ProfileChange')}
          >
            Изменить
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
