import { configure } from 'mobx';

import { DeviceStore } from './device';

configure({ enforceActions: 'observed' });

export class RootStore {
  public deviceStore: DeviceStore;

  constructor() {
    this.deviceStore = new DeviceStore(this);
  }
}

const stores = new RootStore();

export { stores };
