import {
  autoSyncAssets,
  manualSyncAssets
} from './feature/synchronizer';

function sync() {
  try {
    manualSyncAssets();
  } catch (e) {
    console.log('exception = ', e);
  }
}

sync();