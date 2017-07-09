import {
  callApi
} from '../../util';
import {
  WITHDRAW
} from './apiAction.js';
import bankAccount from './bankAccount.js';

export async function withdraw(amount) {
  let withdrawDetail = {
    currency_code: 'JPY',
    bank_account_id: bankAccount.seven,
    amount: amount
  };
  let withdrawResponse = await callApi(WITHDRAW, '', withdrawDetail);
  console.log('withdraw result: ', withdrawResponse);
  return withdrawResponse;
}