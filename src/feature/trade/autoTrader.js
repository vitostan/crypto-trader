import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  assets
} from '../sync';
import {
  GET_TICKER,
  SEND_CHILD_ORDER
} from './apiAction.js';
import workers from './workers.js';
import {
  GAIN_PROFIT_RATIO
} from './tradeConfig.js';

export function autoTrade() {
  let checkTradingConditionTimer = setInterval(trade, 1000);
}

export async function manualTrade(ethAmount) {
  let ethTickerStr = await callApi(GET_TICKER, {
    product_code: 'ETH_BTC'
  })
  let ethTicker = JSON.parse(ethTickerStr);
  let ethPrice = ethTicker.ltp.toFixed(5);
  let body = {
    product_code: "ETH_BTC",
    child_order_type: "LIMIT",
    side: "BUY",
    price: ethPrice,
    size: ethAmount * 1.0,
    minute_to_expire: 1000
  };
  let tradeResult = await callApi(SEND_CHILD_ORDER, '', body);
  console.log('trade result:' + tradeResult);
}

async function trade() {
  for (let worker of workers) {
    if (worker.needInit) {
      initWorker(worker);
    }
    if (checkTradingCondition(worker)) {
      manualTrade();
    }
  }
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