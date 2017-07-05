import moment from 'moment-timezone';
import {
  callApi,
  now,
  currencyCode,
  getCurrencyBasedOn
} from '../../util';
import {
  GET_TICKER,
  GET_BOARD
} from './apiAction.js';

export function monitorRealtimePrice() {
  let getLastTradePriceInterval = setInterval(getLastTradePrice, 10000);
}

async function getLastTradePrice() {
  let btcTickerStr = await callApi(GET_TICKER, {
    product_code: 'BTC_JPY'
  });
  let btcTicker = JSON.parse(btcTickerStr);
  let btcBoardStr = await callApi(GET_BOARD, {
    product_code: 'BTC_JPY'
  })
  let btcBoard = JSON.parse(btcBoardStr);
  let ethTickerStr = await callApi(GET_TICKER, {
    product_code: 'ETH_BTC'
  })
  let ethTicker = JSON.parse(ethTickerStr);
  let time = now();
  let currency = await getCurrencyBasedOn(currencyCode.JPY);
  console.log('Time: ' + time + ' - bitFlyer Market');
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY = ' + (btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY = ' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY');
  console.log('--------------------------\n');
}