import MARKET_CODE from './marketCode.js';
import TRADE_DIRECTION from './tradeDirection.js';

var btcjpyWorkers = [];
for (let x = 0; x < 2; x++) {
  let worker = {
    needInit: true,
    tradeDirection: TRADE_DIRECTION.BUY,
    cashAmount: 5000,
    coinAmount: 0,
    buyingPrice: 0,
    sellingPrice: 0,
    profitAmount: 3000,
    marketCode: MARKET_CODE.BTC_JPY
  }
  btcjpyWorkers.push(worker);
}

export btcjpyWorkers;

// var worker0 = {
//   needInit: false,
//   tradeDirection: TRADE_DIRECTION.BUY,
//   cashAmount: 5000,
//   coinAmount: 0,
//   buyingPrice: 304300,
//   sellingPrice: 307999.000000,
//   profitAmount: 3000,
//   marketCode: MARKET_CODE.BTC_JPY
// };

// var worker1 = {
//   needInit: false,
//   tradeDirection: TRADE_DIRECTION.BUY,
//   cashAmount: 5000,
//   coinAmount: 0,
//   buyingPrice: 304300,
//   sellingPrice: 307999.000000,
//   profitAmount: 3000,
//   marketCode: MARKET_CODE.BTC_JPY
// };

// var worker2 = {
//   needInit: false,
//   tradeDirection: TRADE_DIRECTION.SELL,
//   cashAmount: 5000,
//   coinAmount: 0,
//   buyingPrice: 305155,
//   sellingPrice: 308360.000000,
//   profitAmount: 3000,
//   marketCode: MARKET_CODE.BTC_JPY
// };

// var worker3 = {
//   needInit: false,
//   tradeDirection: TRADE_DIRECTION.SELL,
//   cashAmount: 5000,
//   coinAmount: 0,
//   buyingPrice: 305080,
//   sellingPrice: 308080.000000,
//   profitAmount: 3000,
//   marketCode: MARKET_CODE.BTC_JPY
// };

// workers.push(worker0);
// workers.push(worker1);
// workers.push(worker2);
// workers.push(worker3);