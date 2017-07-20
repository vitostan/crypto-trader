import {
  monitorRealtimePrice
} from './feature/trade';
import notifier from 'node-notifier';

function price() {
  try {
    monitorRealtimePrice();
    notifier.notify({
      message: 'Strat monitoring market price',
      timeout: 3
    });
  } catch (e) {
    console.log('exception = ', e);
  }
}

price();