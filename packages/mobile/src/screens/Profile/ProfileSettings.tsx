import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import codePush from 'react-native-code-push';

import { Avatar } from '_app/components';
import { tBase, tTitle } from '_app/constants';
import { useMeQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const ProfileSettingsScreen = () => {
  const { t } = useTranslation();

  const { loading, data } = useMeQuery();

  const user = data!.me;

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

  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle="dark-content" animated translucent />
      <View style={s.containerWrap}>
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
        {/* TODO: i18n */}
        <Text style={{ position: 'absolute', top: 0, left: 20 }} onPress={() => navigation.goBack()}>
          Назад
        </Text>
        <Text style={{ position: 'absolute', top: 0, right: 20 }} onPress={() => navigation.push('ProfileChange')}>
          Изменить
        </Text>
        <View style={[{ marginTop: 10 }]}>
          <TouchableOpacity onPress={onButtonPress}>
            <Text style={{ fontWeight: '600', color: 'blue' }}>{t('utils:check_updates')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
