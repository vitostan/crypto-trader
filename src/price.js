import {
  monitorRealtimePrice
} from './feature/trade';

function price() {
  try {
    monitorRealtimePrice();
  } catch (e) {
    console.log('exception = ', e);
  }
}

price();