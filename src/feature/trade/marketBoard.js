import moment from 'moment-timezone';
import {
  callApi,
  currencyCode,
  currency,
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
  let now = moment().tz('Asia/Tokyo').format('MM-DD HH:mm:ss');
  await getCurrencyBasedOn(currencyCode.JPY);
  console.log('Time: ' + now + ' - bitFlyer Market:');
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY = ' + (btcTicker.ltp * currency.rates.CNY).toFixed(2) + ' CNY');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY = ' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY).toFixed(2) + ' CNY');
  console.log('--------------------------\n');
}