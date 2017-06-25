import {
  assetsSynchronizer
} from './feature/inquiry';

function sync() {
  try {
    assetsSynchronizer();
  } catch (e) {
    console.log('exception = ', e);
  }
}

sync();