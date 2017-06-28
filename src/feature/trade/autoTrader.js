import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  assets,
  GET_TICKER
} from '../inquiry';
import workers from './workers.js';
import {
  GAIN_PROFIT_RATIO
} from './tradeConfig.js';

export default function autoTrade() {
  let checkTradingConditionTimer = setInterval(trade, 1000);
}

async function checkTradingCondition(worker) {
  // let orderBook = await callApi(GET_BOARD);
  let tickerString = await callApi(GET_TICKER, {
    product_code: 'BTC_JPY'
  });
  let ticker = JSON.parse(tickerString);
  if (ticker.ltp >= worker.buyingPrice * (1 + worker.feeRatio + GAIN_PROFIT_RATIO))
    return true;
  return false;
}


async function trade() {
  for (var worker from workers) {
    if (worker.needInit) {
      initWorker(worker);
    }
    if checkTradingCondition(worker) {}

  }
}

function initWorker(worker) {
  worker = {
    needInit: false,
    cashAssets: 5000, //JPY/CNY
    virtualAssets: 0, //BTC/ETH
    buyingPrice: 0, //
    sellingPrice: 0,
    feeRatio: 0
  }
}