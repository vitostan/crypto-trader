import {
  autoTrade,
  monitorRealtimePrice
} from './feature/trade';

function main() {
  try {
    monitorRealtimePrice();
  } catch (e) {
    console.log('exception = ', e);
  }
}

main();