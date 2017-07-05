import {
  withdraw as withdraw_,
  bankAccountId
} from './feature/withdraw';

function withdraw() {
  try {
    let withdrawDetail = {
      currency_code: "JPY",
      bank_account_id: bankAccountId.seven,
      amount: 20000
    };
    //withdraw_(withdrawDetail);
    console.log('withdraw');
  } catch (e) {
    console.log('exception = ', e);
  }
}

withdraw();