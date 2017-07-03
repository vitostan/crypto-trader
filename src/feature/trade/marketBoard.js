import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  GET_TICKER
} from '../sync';
import {
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
  console.log('Time: ', now);
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY');
  console.log('Compare ticker best ask with board best ask:');
  console.log('Ticker best ask = ' + btcTicker.best_ask + ' , Board best ask = ' + btcBoard.asks[0].price);
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY');
  console.log('--------------------------\n');
}