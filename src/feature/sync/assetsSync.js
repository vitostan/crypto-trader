import {
  callApi
} from '../../util';
import {
  GET_BALANCE
} from './apiAction.js';
import assets from './assets.js';

export async function manualSyncAssets() {
  await syncAssets();
}

async function syncAssets() {
  let balanceString = await callApi(GET_BALANCE);
  let balance = JSON.parse(balanceString);
  for (let subBalance of balance) {
    fetchBalance(subBalance, assets);
  }
}

function fetchBalance(subBalance, assets) {
  let lookUpTable = {
    'JPY': function() {
      assets.JPY = subBalance.available;
    },
    'BTC': function() {
      assets.BTC = subBalance.available;
    },
    'ETH': function() {
      assets.ETH = subBalance.available;
    }
  };
  if (typeof lookUpTable[subBalance.currency_code] !== 'function') {
    throw new Error('Invalid currencyCode.');
  }
  return lookUpTable[subBalance.currency_code]();
}