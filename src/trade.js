import {
  monitorRealtimePrice,
  autoTrade,
  manualTrade,
  cancelTrade
} from './feature/trade';

function trade() {
  try {
    monitorRealtimePrice();
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();