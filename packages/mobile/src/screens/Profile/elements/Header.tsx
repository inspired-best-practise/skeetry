import React from 'react';
import { View, Text, ActionSheetIOS, StyleSheet } from 'react-native';
import codePush from 'react-native-code-push';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as HeroIcon from 'react-native-heroicons/solid';

import { ProfileStatsItem, Avatar, ProfileFilter } from '_app/components';
import { colors, PLATFORM } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { signOut } from '_app/utils/authentication';

import { s } from '../styles';

const logOut = async () => {
  await signOut();
  navigation.navigate('AuthStack');
};

export const renderHeader = (user: TUser, t, isMe, theme, scheme, route, showActionSheetWithOptions) => {
  const actionOptions = [
    `${t('utils:cancel')}`,
    `${t('settings:account_settings')}`,
    `${t('utils:check_updates')}`,
    `${t('settings:logout')}`,
  ];

  const onButtonPress = () => {
    codePush.sync({
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: ' Описание: ',
        mandatoryContinueButtonLabel: 'Продолжить',
        mandatoryUpdateMessage: 'Доступно обновление, которое необходимо установить!',
        optionalIgnoreButtonLabel: 'Игнорировать',
        optionalInstallButtonLabel: 'Установить',
        optionalUpdateMessage: 'Доступно обновление, вы желаете его установить?',
        title: 'Обновления доступны',
      },
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: actionOptions,
            destructiveButtonIndex: 3,
            cancelButtonIndex: 0,
            userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              navigation.navigate('Settings');
            } else if (buttonIndex === 2) {
              onButtonPress();
            } else if (buttonIndex === 3) {
              logOut();
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: actionOptions,
            userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
          },
          i => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              navigation.navigate('Settings');
            } else if (i === 2) {
              onButtonPress();
            } else if (i === 3) {
              logOut();
            }
          },
        );
  };

  return (
    <View>
      <View style={[s.profilePanel]}>
        {isMe && route.name !== 'ProfileUser' && (
          <TouchableWithoutFeedback onPress={() => onPressSheet()}>
            <HeroIcon.DotsHorizontalIcon size={22} color={theme.text01} />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={[s.profileHeader, theme === 'dark' && { borderBottomColor: colors.gray800 }]}>
        <View style={s.profileHeaderWrap}>
          <TouchableOpacity
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
          <View style={{ marginLeft: 10 }}>
            {user.name !== null && user.name.length !== 0 && (
              <Text numberOfLines={1} style={[s.name, styles(theme).text]}>
                {user.name}
              </Text>
            )}
            <Text numberOfLines={1} style={[s.username, styles(theme).text]}>
              @{user.username}
            </Text>
            {user.bio !== null && user.bio.length !== 0 && (
              <Text numberOfLines={1} style={[s.bio, styles(theme).text]}>
                {user.bio}
              </Text>
            )}
          </View>
        </View>
        {!isMe && (
          <View style={{ paddingTop: 20 }}>
            <Button title={t('profile:follow')} primary small />
          </View>
        )}
      </View>

      <View style={[s.profileStats, theme === 'dark' && { borderBottomColor: colors.gray800 }]}>
        <ProfileStatsItem name={`${t('profile:place')}`} number={0} action={() => navigation.push('UsersTop')} />
        <ProfileStatsItem name={`${t('profile:want')}`} number={user.wantedCount} action={() => setSelected('want')} />
        <ProfileStatsItem
          name={`${t('profile:visited')}`}
          number={user.visitedCount}
          action={() => setSelected('visited')}
        />
        <ProfileStatsItem name={`${t('profile:trips')}`} number={0} />
      </View>
      <ProfileFilter />
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
    icon: {
      backgroundColor: theme.base,
    },
  });
