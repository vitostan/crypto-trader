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
  console.log('1 BTC = ' + btcTicker.ltp + ' JPY = ' + (btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY (currency = ' + currency.rates.CNY + ')');
  console.log('1 ETH = ' + ethTicker.ltp.toFixed(6) + ' BTC');
  console.log('1 ETH = ' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + ' JPY = ' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(2) + ' CNY (currency = ' + currency.rates.CNY + ')');
  console.log('--------------------------\n');
  if (btcTicker.ltp > 330000 || btcTicker.ltp < 268000 || ethTicker.ltp > 0.095 || ethTicker.ltp < 0.070) {
    if (notifyFlag < 3)
      notifier.notify({
        message: '1B=' + btcTicker.ltp + 'JPY=' + (btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(0) + 'CNY(' + currency.rates.CNY + ')' +
          '\n1E=' + ethTicker.ltp.toFixed(6) + 'B=' + (ethTicker.ltp * btcTicker.ltp).toFixed(0) + 'JPY=' + (ethTicker.ltp * btcTicker.ltp * currency.rates.CNY * 1.02).toFixed(0) + 'CNY',
        timeout: 7
      });
    notifyFlag = notifyFlag > 9 ? 0 : notifyFlag + 1;
  }
}