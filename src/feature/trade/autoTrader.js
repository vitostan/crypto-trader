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
import TRADE_DIRECTION from './tradeDirection.js';

export function autoTrade() {
  let checkTradingConditionTimer = setInterval(trade, 1000);
}

export async function manualTrade(amount, tradeDirection, marketCode) {
  let tickerStr = await callApi(GET_TICKER, {
    product_code: marketCode
  })
  let ticker = JSON.parse(tickerStr);
  let price = ticker.ltp.toFixed(5);
  let coinAmount = tradeDirection === TRADE_DIRECTION.BUY ?
    (amount * 1.0 / price).toFixed(4) : amount * 0.9986;
  console.log('coinAmount = ', coinAmount);
  let body = {
    product_code: marketCode,
    child_order_type: 'LIMIT',
    side: tradeDirection,
    price: price,
    size: coinAmount * 1.0,
    minute_to_expire: 1000
  };
  let tradeResult = await callApi(SEND_CHILD_ORDER, '', body);
  console.log('trade result:' + tradeResult);
  return tradeResult;
}

async function trade() {
  for (let worker of workers) {
    if (worker.needInit) {
      initWorker(worker);
    }
    if (checkTradingCondition(worker)) {

    }
  }
}

async function checkTradingCondition(worker, marketCode) {
  let tickerString = await callApi(GET_TICKER, {
    product_code: marketCode
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