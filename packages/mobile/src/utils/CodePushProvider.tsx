import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import codePush, { DownloadProgress } from 'react-native-code-push';

import { colors } from '_app/constants';

export interface ICodePushContext {
  status: null | codePush.SyncStatus;
  progress: null | number;
  newPackage: boolean;
  versionApplied?: () => void;
}

// @ts-ignore
export const CodePushContext = createContext<ICodePushContext>({});

export const useCodePush = () => useContext<ICodePushContext>(CodePushContext);

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
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
};

export const CodePushProvider = codePush(codePushOptions)(
  class extends React.Component<{}, ICodePushContext> {
    state = {
      status: null,
      progress: 0,
      newPackage: false,
    };

    versionApplied() {
      console.log('versionApplied');
      this.setState({ newPackage: false });
    }

    codePushStatusDidChange(status: codePush.SyncStatus) {
      if (status === codePush.SyncStatus.UPDATE_INSTALLED) {
        AsyncStorage.setItem('shouldUpdateVersion', 'true');
        this.setState({
          status,
          newPackage: true,
        });
      } else {
        this.setState({ status });
      }
    }

    codePushDownloadDidProgress(progress: DownloadProgress) {
      this.setState({ progress: progress.receivedBytes / progress.totalBytes });
    }
    render() {
      const isUpdating =
        this.state.status === codePush.SyncStatus.DOWNLOADING_PACKAGE ||
        this.state.status === codePush.SyncStatus.INSTALLING_UPDATE;
      return (
        <CodePushContext.Provider
          value={{
            status: this.state.status,
            progress: this.state.progress,
            newPackage: this.state.newPackage,
            versionApplied: this.versionApplied,
          }}
        >
          <>
            {this.props.children}
            {isUpdating && (
              <View style={styles.container}>
                <Text style={styles.text}>Обновление</Text>
                <View style={styles.loaderOutline}>
                  <View style={[styles.loader, { width: `${this.state.progress * 100}%` }]} />
                </View>
              </View>
            )}
          </>
        </CodePushContext.Provider>
      );
    }
  },
);

export default CodePushProvider;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderOutline: {
    elevation: 2,
    backgroundColor: colors.white,
    height: 30,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  loader: { backgroundColor: colors.black, flex: 1 },
  text: { fontSize: 20 },
});
