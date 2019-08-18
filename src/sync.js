import {
  now
} from './util';
import {
  manualSyncAssets
} from './feature/sync';

async function sync() {
  try {
    let assets = await manualSyncAssets();
    console.log('Time: ' + now() + ' - bitFlyer Market');
    console.log('assets.JPY = ', assets.JPY);
    console.log('assets.BTC = ', assets.BTC);
    console.log('assets.ETH = ', assets.ETH);
    console.log('assets.LTC = ', assets.LTC);
    console.log('---------------------------');
  } catch (e) {
    console.log('exception = ', e);
  }
}

sync();