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
import notifier from 'node-notifier';

export function monitorRealtimePrice() {
  let getLastTradePriceInterval = setInterval(getLastTradePrice, 10000);
}

var notifyFlag = 0;

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
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY = ' + (btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY (currency = ' + currency.rates.CNY * 100 + ')');
  console.log('1 ETH = ' + ethTicker.ltp.toFixed(6) + ' BTC');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY = ' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY (currency = ' + currency.rates.CNY * 100 + ')');
  console.log('--------------------------\n');
  if (btcTicker.ltp > 265000 || btcTicker.ltp < 260000) {
    if (notifyFlag < 3)
      notifier.notify({
        'title': 'Price Alert',
        'message': 'Price now is' + btcTicker.ltp
      });
    notifyFlag = notifyFlag > 9 ? 0 : notifyFlag + 1;
  }
}