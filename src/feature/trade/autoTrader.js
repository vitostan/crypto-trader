import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  assets
} from '../sync';
import {
  GET_TICKER
} from './apiAction.js';
import workers from './workers.js';
import {
  GAIN_PROFIT_RATIO
} from './tradeConfig.js';

export default function autoTrade() {
  let checkTradingConditionTimer = setInterval(trade, 1000);
}

async function checkTradingCondition(worker) {
  let tickerString = await callApi(GET_TICKER, {
    product_code: 'BTC_JPY'
  });
  let ticker = JSON.parse(tickerString);
  if (ticker.ltp >= worker.buyingPrice * (1 + worker.feeRatio + GAIN_PROFIT_RATIO))
    return true;
  return false;
}

async function trade() {
  for (let worker of workers) {
    if (worker.needInit) {
      initWorker(worker);
    }
    if (checkTradingCondition(worker)) {
      executeTrade();
    }
  }
}

function initWorker(worker) {
  worker = {
    needInit: false,
    cashAssets: 5000, //JPY/CNY
    virtualAssets: 0, //BTC/ETH
    buyingPrice: 0, //
    sellingPrice: 0,
    feeRatio: 0.15 / 100
  }
}

function executeTrade() {
  console.log('trade executed');
}