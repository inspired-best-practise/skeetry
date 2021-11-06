import { createState, useState } from '@hookstate/core';

const profileState = createState({
  selected: 'want',
} as TProfileState);

export function useProfileState() {
  const state = useState(profileState);

  return {
    get selected() {
      return state.selected.get();
    },
    setSelected(selected: string) {
      state.selected.set(selected);
    },
  };
}

type TProfileState = {
  selected: string;
};
