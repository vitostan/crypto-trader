import moment from 'moment-timezone';
import {
  callApi,
  now,
  currencyCode,
  getCurrencyBasedOn
} from '../../util';
import {
  GET_TICKER
} from './apiAction.js';
import MARKET_CODE from './marketCode.js';

export function monitorRealtimePrice() {
  let getLastTradePriceInterval = setInterval(getLastTradePrice, 10000);
}

async function getLastTradePrice() {
  let btcTickerStr = await callApi(GET_TICKER, {
    product_code: MARKET_CODE.BTC_JPY
  });
  let btcTicker = JSON.parse(btcTickerStr);
  let ethTickerStr = await callApi(GET_TICKER, {
    product_code: MARKET_CODE.ETH_BTC
  })
  let ethTicker = JSON.parse(ethTickerStr);
  let time = now();
  let currency = await getCurrencyBasedOn(currencyCode.JPY);
  console.log('Time: ' + time + ' - bitFlyer Market');
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY = ' + (btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY');
  console.log('1 ETH = ' + ethTicker.ltp.toFixed(6) + ' BTC');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY = ' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY');
  console.log('--------------------------\n');
}