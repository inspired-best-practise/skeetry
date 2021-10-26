import React from 'react';
import { View, Text, ActionSheetIOS } from 'react-native';
import codePush from 'react-native-code-push';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as HeroIcon from 'react-native-heroicons/solid';

import { ProfileStatsItem, Avatar, ProfileFilter } from '_app/components';
import { colors, PLATFORM } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from '../styles';

export const renderHeader = (user: TUser, t, setSelected, isMe, showActionSheetWithOptions, setLogout) => {
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
            userInterfaceStyle: 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              navigation.navigate('ProfileSettings');
            } else if (buttonIndex === 2) {
              onButtonPress();
            } else if (buttonIndex === 3) {
              setLogout();
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: actionOptions,
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
          },
          i => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              navigation.navigate('ProfileSettings');
            } else if (i === 2) {
              onButtonPress();
            } else if (i === 3) {
              setLogout();
            }
          },
        );
  };

  return (
    <View>
      <View style={[s.profilePanel]}>
        {isMe && (
          <TouchableWithoutFeedback onPress={() => onPressSheet()}>
            <HeroIcon.DotsHorizontalIcon size={22} color={colors.black} />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={s.profileHeader}>
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
        <Text style={s.name}>{user.username}</Text>
      </View>
      <View style={s.profileStats}>
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
