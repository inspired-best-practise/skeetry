import { createState, useState } from '@hookstate/core';

const themeState = createState({
  theme: null,
  darkMode: null,
} as TThemeState);

export function useThemeState() {
  const state = useState(themeState);

  return {
    get theme() {
      return state.theme.get();
    },
    get darkMode() {
      return state.darkMode.get();
    },
    changeTheme({ theme, darkMode }: TThemeState) {
      if (typeof theme !== 'undefined') {
        state.theme.set(theme);
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode.set(darkMode);
      }
    },
    setDefaultTheme({ theme, darkMode }: TThemeState) {
      if (!state.theme.get()) {
        state.theme.set(theme);
        state.darkMode.set(darkMode);
      }
    },
  };
}

type TThemeState = {
  theme: 'default' | null | undefined;
  darkMode: boolean | null | undefined;
};
