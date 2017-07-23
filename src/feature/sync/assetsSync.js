import {
  callApi
} from '../../util';
import {
  GET_BALANCE
} from './apiAction.js';

export async function manualSyncAssets() {
  return await syncAssets();
}

async function syncAssets() {
  let balanceString = await callApi(GET_BALANCE);
  let balance = JSON.parse(balanceString);
  let assets = {
    JPY: 0,
    BTC: 0,
    ETH: 0,
    LTC: 0
  };
  for (let subBalance of balance) {
    fetchBalance(subBalance, assets);
  }
  return assets;
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
    },
    'LTC': function() {
      assets.LTC = subBalance.available;
    }
  };
  if (typeof lookUpTable[subBalance.currency_code] !== 'function') {
    throw new Error('Invalid currencyCode.');
  }
  return lookUpTable[subBalance.currency_code]();
}