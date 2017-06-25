import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  GET_BALANCE
} from './apiAction.js';
import assets from './assets.js';

export default function syncAssets() {
  try {
    let syncAssetsTimer = setInterval(updateAssets, 5000);
  } catch (e) {
    console.log('error = ', e);
  }
}

async function updateAssets() {
  let balanceString = await callApi(GET_BALANCE);
  let balance = JSON.parse(balanceString);
  for (var x of balance) {
    switch (x.currency_code) {
      case 'JPY':
        assets.JPY = x.available;
        break;
      case 'BTC':
        assets.BTC = x.available;
        break;
      case 'ETH':
        assets.ETH = x.available;
        break;
    }
  }
  let datetime = new Date();
  let jstDateTime = moment(datetime).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss(z)');
  console.log('Time: ', jstDateTime);
  console.log('assets.JPY = ', assets.JPY);
  console.log('assets.BTC = ', assets.BTC);
  console.log('assets.ETH = ', assets.ETH);
  console.log('============================');
  console.log('');
  jstDateTime = undefined;
  datetime = undefined;
}