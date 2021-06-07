import { getUniqueId, getDeviceName, isEmulator, getSystemName, getModel } from 'react-native-device-info';

type TData = {
  deviceName?: string;
  isEmulator?: boolean;
};

const data: TData = {};

async function getData(): Promise<void> {
  data.deviceName = await getDeviceName();
  data.isEmulator = await isEmulator();
}
getData();

export const DEVICE_ID: string = getUniqueId();
export const DEVICE_NAME: string | undefined = data.deviceName;
export const IS_DEVICE: boolean = !data.isEmulator;
export const DEVICE_PLATFORM: string = getSystemName();
export const DEVICE_MODEL: string = getModel();
