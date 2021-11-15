import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

import { AppContext } from '_app/context';
import { Typography } from '_app/theme';
import { ThemeColors } from '_app/types/theme';

import { version } from '../../../package.json';

const { FontSizes, FontWeights } = Typography;

export const AboutScreen = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);

  return (
    <View style={[styles(theme).container]}>
      <Text style={[styles(theme).logo]}>Skeetry</Text>
      <Text style={[styles(theme).text]}>
        {t('utils:version')}: {version}
      </Text>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      ...FontSizes.Heading,
      ...FontWeights.Bold,
      color: theme.text01,
    },
    text: {
      color: theme.text01,
    },
  });
