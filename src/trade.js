import {
  MARKET_CODE,
  manualTrade,
  cancelTrade
} from './feature/trade';

function trade() {
  try {
    let tradeResult = manualTrade(0, MARKET_CODE.BTC_JPY);
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();