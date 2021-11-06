import { createState, useState } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePersistor, { PersistorWrapper } from 'hookstate-persist';

const regState = createState(
  PersistorWrapper({
    phone: null,
    code: null,
  } as TRegState),
);

const persistor = CreatePersistor({
  key: '@myRegState',
  engine: AsyncStorage,
});

export function useRegState() {
  const state = useState(regState);
  state.attach(persistor);

  return {
    get phone() {
      return state.phone.get();
    },
    get code() {
      return state.code.get();
    },
    setPhone(phone: string) {
      state.phone.set(phone);
    },
    setCode(code: string) {
      state.code.set(code);
    },
  };
}

type TRegState = {
  phone: string | null | undefined;
  code: string | null | undefined;
};
