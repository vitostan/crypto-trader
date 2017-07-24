import MARKET_CODE from './marketCode.js';
import TRADE_DIRECTION from './tradeDirection.js';

var workers = [];
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
  workers.push(worker);
}

export default workers;