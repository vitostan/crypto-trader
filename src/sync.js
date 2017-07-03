import {
  autoSyncAssets,
  manualSyncAssets
} from './feature/sync';

function sync() {
  try {
    manualSyncAssets();
  } catch (e) {
    console.log('exception = ', e);
  }
}

sync();