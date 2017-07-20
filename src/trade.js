import {
  MARKET_CODE,
  TRADE_DIRECTION,
  manualTrade,
  cancelTrade
} from './feature/trade';

function trade() {
  try {
    let tradeResult = manualTrade(0, TRADE_DIRECTION.SELL, MARKET_CODE.BTC_JPY);
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();