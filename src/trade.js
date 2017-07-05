import {
  autoTrade,
  monitorRealtimePrice
} from './feature/trade';

function trade() {
  try {
    monitorRealtimePrice();
  } catch (e) {
    console.log('exception = ', e);
  }
}

trade();