import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStore } from './RootStore';

export const useStores = (): RootStore => <RootStore>useContext(MobXProviderContext);
