import {
  sma
} from './feature/history';

function history() {
  try {
    sma(10);
  } catch (e) {
    console.log('exception = ', e);
  }
}

history();