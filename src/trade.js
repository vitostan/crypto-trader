import {
  MARKET_CODE,
  TRADE_DIRECTION,
  manualTrade,
  cancelTrade,
  autoTrade
} from './feature/trade';

async function trade() {
  try {
    let tradeResult = manualTrade(0, TRADE_DIRECTION.SELL, MARKET_CODE.BTC_JPY);
    // await autoTrade();
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();