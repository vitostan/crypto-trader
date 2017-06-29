import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  GET_TICKER
} from '../inquiry';

export function monitorRealtimePrice() {
  let getLastTradePriceInterval = setInterval(getLastTradePrice, 20000);
}

async function getLastTradePrice() {
  let btcTickerStr = await callApi(GET_TICKER, {
    product_code: 'BTC_JPY'
  });
  let btcTicker = JSON.parse(btcTickerStr);
  let ethTickerStr = await callApi(GET_TICKER, {
    product_code: 'ETH_BTC'
  })
  let ethTicker = JSON.parse(ethTickerStr);
  let now = moment().tz('Asia/Tokyo').format('MM-DD HH:mm:ss');
  console.log('Time: ', now);
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY');
  console.log('--------------------------\n');
}