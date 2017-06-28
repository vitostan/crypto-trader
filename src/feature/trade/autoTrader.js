import moment from 'moment-timezone';
import {
  callApi
} from '../../util';
import {
  assets,
  GET_TICKER
} from '../inquiry';

export default function autoTrade() {
  let checkTradingConditionTimer = setInterval(checkTradingCondition, 1000);
}

async function checkTradingCondition() {
  // let orderBook = await callApi(GET_BOARD);
  let tickerString = await callApi(GET_TICKER, {
    product_code: 'ETH_BTC'
  });
  let ticker = JSON.parse(tickerString);
  let datetime = new Date();
  let jstDatetime = moment(datetime).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss(z)');
  console.log('Time = ', jstDatetime);
  console.log('BTC_JPY: last trading price = ', ticker.ltp);
  console.log('============================');
  console.log('');
  jstDatetime = undefined;
  datetime = undefined;
}


async function trade() {
  console.log('');
}