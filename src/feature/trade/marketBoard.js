import moment from 'moment-timezone';
import {
  callApi,
  now,
  currencyCode,
  getCurrencyBasedOn
} from '../../util';
import {
  GET_TICKER,
  GET_PRICE
} from './apiAction.js';
import MARKET_CODE from './marketCode.js';
import notifier from 'node-notifier';

export function monitorRealtimePrice() {
  let getLastTradePriceInterval = setInterval(getLastTradePrice, 10000);
  // getLastTradePrice();
}

var notifyFlag = 0;

async function getLastTradePrice() {
  let btcTickerStr = await callApi(GET_TICKER, {
    product_code: MARKET_CODE.BTC_JPY
  });
  let btcTicker = JSON.parse(btcTickerStr);
  let ethTickerStr = await callApi(GET_TICKER, {
    product_code: MARKET_CODE.ETH_BTC
  });
  let ethTicker = JSON.parse(ethTickerStr);
  let bchTickerStr = await callApi(GET_TICKER, {
    product_code: MARKET_CODE.BCH_BTC
  });
  let bchTicker = JSON.parse(bchTickerStr);
  let priceStr = await callApi(GET_PRICE);
  let price = JSON.parse(priceStr);
  let monaPrice = price[11];
  let time = now();
  let currency = await getCurrencyBasedOn(currencyCode.JPY);
  console.log('Time: ' + time + ' - bitFlyer Market');
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY');
  console.log('1 ETH = ' + ethTicker.ltp.toFixed(6) + ' BTC');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY');
  console.log('1 BCH = ' + bchTicker.ltp.toFixed(6) + ' BTC');
  console.log('1 BCH = ' + (bchTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY');
  console.log('1 MONA = ' + monaPrice.rate.toFixed(0) + ' JPY');
  console.log('--------------------------\n');
  if (monaPrice.rate > 430 || monaPrice.rate < 170) {
    if (notifyFlag < 3)
      notifier.notify({
        message: '1 MONA = ' + monaPrice.rate.toFixed(0) + ' JPY',
        timeout: 7
      });
    notifyFlag = notifyFlag > 9 ? 0 : notifyFlag + 1;
  }
}