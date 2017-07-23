import moment from 'moment-timezone';
import {
  callApi,
  now
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

export async function manualTrade(amount, tradeDirection, marketCode) {
  let tickerStr = await callApi(GET_TICKER, {
    product_code: marketCode
  })
  let ticker = JSON.parse(tickerStr);
  let price = ticker.ltp.toFixed(5);
  let coinAmount = tradeDirection === TRADE_DIRECTION.BUY ?
    (amount * 1.0 / price).toFixed(4) : (amount * 0.9986).toFixed(6);
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

export async function autoTrade() {
  // let checkTradingConditionTimer = setInterval(trade, 10000);
  await trade();
}

async function trade() {
  let index = 0;
  for (let worker of workers) {
    let tickerStr = await callApi(GET_TICKER, {
      product_code: worker.marketCode
    });
    let ticker = JSON.parse(tickerStr);
    let price = ticker.ltp.toFixed(6);
    if (((worker.tradeDirection === TRADE_DIRECTION.BUY) && canBuy(worker, price)) || worker.needInit) {
      let boughtCoinWorker = await workerTrade(worker, price); //buy coins
      workers[index] = boughtCoinWorker;
      await new Promise(resolve => setTimeout(resolve, 5000)); //sleep 5 mins, return
      index++;
      return;
    }
    if ((worker.tradeDirection === TRADE_DIRECTION.SELL) && canSell(worker, price)) { //if holding coins and can sell
      let soldCoinWorker = await workerTrade(worker, price); //sell coins and return
      workers[index] = soldCoinWorker;
      index++;
      return;
    }
  }
}

async function workerTrade(worker, price) {
  let coinAmount = worker.tradeDirection === TRADE_DIRECTION.BUY ?
    (worker.cashAmount * 1.0 / price).toFixed(6) : //buy
    (worker.coinAmount * 0.9986).toFixed(6); //sell
  let body = {
    product_code: worker.marketCode,
    child_order_type: 'LIMIT',
    side: worker.tradeDirection,
    price: price,
    size: coinAmount * 1.0,
    minute_to_expire: 1000
  };
  let tradeResult = await callApi(SEND_CHILD_ORDER, '', body);
  console.log('time: ' + now());
  console.log('worker tradeResult = ' + tradeResult);
  console.log('-------------------------------');
  if (tradeResult.child_order_acceptance_id) {
    if (worker.tradeDirection === TRADE_DIRECTION.BUY) {
      return {
        needInit: false,
        tradeDirection: TRADE_DIRECTION.SELL,
        cashAmount: 0,
        coinAmount: coinAmount,
        buyingPrice: price,
        sellingPrice: worker.sellingPrice,
        profitAmount: 2000,
        marketCode: MARKET_CODE.BTC_JPY
      };
    } else {
      return {
        needInit: false,
        tradeDirection: TRADE_DIRECTION.BUY,
        cashAmount: 5000,
        coinAmount: 0,
        buyingPrice: worker.buyingPrice,
        sellingPrice: price,
        profitAmount: 2000,
        marketCode: MARKET_CODE.BTC_JPY
      };
    }
  }
  return worker;
}

function canBuy(worker, price) {
  return worker.profitAmount <= (worker.sellingPrice - price);
}

function canSell(worker, price) {
  return worker.profitAmount <= (price - worker.buyingPrice);
}