import { action, observable } from 'mobx';

import { DEVICE_ID, DEVICE_NAME, IS_DEVICE, DEVICE_PLATFORM } from '_app/constants';

import { BaseStore } from '../BaseStore';

export class DeviceStore extends BaseStore {
  @observable deviceId: string | null = null;
  @observable deviceName: string | null | undefined = null;
  @observable isDevice: boolean = false;
  @observable platform: string | null = null;

  @action
  setDeviceInfo(): void {
    this.deviceId = DEVICE_ID;
    this.deviceName = DEVICE_NAME;
    this.isDevice = IS_DEVICE;
    this.platform = DEVICE_PLATFORM;
  }
}
