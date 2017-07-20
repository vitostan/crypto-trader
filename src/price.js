import {
  monitorRealtimePrice
} from './feature/trade';
import notifier from 'node-notifier';

function price() {
  try {
    monitorRealtimePrice();
    notifier.notify('Strat monitoring market price');
  } catch (e) {
    console.log('exception = ', e);
  }
}

price();