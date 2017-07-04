import {
  withdraw,
  bankAccountId
} from './feature/withdraw';

function cashout() {
  try {
    var withdrawDetail = {
      currency_code: "JPY",
      bank_account_id: bankAccountId.seven,
      amount: 20000
    };
    withdraw(withdrawDetail);
  } catch (e) {
    console.log('exception = ', e);
  }
}

cashout();