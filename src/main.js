import {
  autoTrade
} from './feature/trade';

function main() {
  try {
    autoTrade();
  } catch (e) {
    console.log('exception = ', e);
  }
}

main();