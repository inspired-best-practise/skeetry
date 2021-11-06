import { createState, useState } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePersistor, { PersistorWrapper } from 'hookstate-persist';

const authState = createState(
  PersistorWrapper({
    isLogined: false,
    me: {},
    accessToken: null,
    refreshToken: null,
  } as TAuthState),
);

const persistor = CreatePersistor({
  key: '@myAuthState',
  engine: AsyncStorage,
});

export function useAuthState() {
  const state = useState(authState);
  state.attach(persistor);

  return {
    get isLogined() {
      return state.isLogined.get();
    },
    get me() {
      return state.me.get();
    },
    get accessToken() {
      return state.accessToken.get();
    },
    get refreshToken() {
      return state.refreshToken.get();
    },
    setLogin() {
      state.isLogined.set(true);
    },
    setLogout() {
      state.isLogined.set(false);
      state.me.set({});
      state.accessToken.set(null);
      state.refreshToken.set(null);
    },
    setMe(user: object) {
      state.me.merge(user);
    },
    setAccessToken(accessToken: string) {
      state.accessToken.set(accessToken);
    },
    setRefreshToken(refreshToken: string) {
      state.refreshToken.set(refreshToken);
    },
  };
}

type TAuthState = {
  isLogined: boolean;
  me: object;
  accessToken: string | null | undefined;
  refreshToken: string | null | undefined;
};

export function getAccessToken() {
  return authState.accessToken.get();
}
