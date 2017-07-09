import {
  withdraw as withdraw_
} from './feature/withdraw';

async function withdraw() {
  try {
    let amount = 20000;
    // let withdrawResult = await withdraw_(amount);
    // console.log('withdraw result: ', withdrawResult);
  } catch (e) {
    console.log('exception = ', e);
  }
}

withdraw();