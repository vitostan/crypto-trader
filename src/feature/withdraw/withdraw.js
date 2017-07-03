import {
  callApi
} from '../../util';
import {
  WITHDRAW,
  GET_BANK_ACCOUNTS
} from './apiAction.js';
import bankAccountId from './bankAccountId.js';

export async function withdraw(withdrawDetail) {
  let withdrawResponse = await callApi(WITHDRAW, '', withdrawDetail);
}