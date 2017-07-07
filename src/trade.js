import {
  autoTrade,
  monitorRealtimePrice,
  manualTrade
} from './feature/trade';

function trade() {
  try {
    let ethAmount = 0.5;
    // monitorRealtimePrice();
    manualTrade(ethAmount);
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();