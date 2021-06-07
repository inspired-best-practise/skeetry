import { RootStore } from './RootStore';

export class BaseStore {
  public rootStore: RootStore;

  // eslint-disable-next-line no-shadow
  constructor(RootStore: RootStore) {
    this.rootStore = RootStore;
  }
}
