import {
  GET_CHILD_ORDERS
} from './feature/trade';
import {
  assetsSynchronizer
} from './feature/inquiry';
import {
  callApi
} from './util';

async function autoTrade() {
  let orderBook = await callApi(GET_BOARD);
  let orderBookObj = JSON.parse(orderBook);
  console.log('==============================');
  console.log(orderBookObj.bids.length);
  console.log('==============================');
  console.log('\n');
}

function main() {
  try {
    // var tradeScheduler = setInterval(autoTrade, 5000);
    // autoTrade();
    assetsSynchronizer();
  } catch (e) {
    console.log('exception = ', e);
  }
}

//app start from here
main();