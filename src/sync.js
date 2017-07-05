import {
  now
} from './util';
import {
  assets,
  manualSyncAssets
} from './feature/sync';

async function sync() {
  try {
    await manualSyncAssets();
    let time = now();
    console.log('Time: ' + time + ' - bitFlyer Market');
    console.log('assets.JPY = ', assets.JPY);
    console.log('assets.BTC = ', assets.BTC);
    console.log('assets.ETH = ', assets.ETH);
    console.log('---------------------------');
  } catch (e) {
    console.log('exception = ', e);
  }
}

sync();