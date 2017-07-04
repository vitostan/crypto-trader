import {
  callApi
} from '../../util';
import {
  WITHDRAW
} from './apiAction.js';

export async function withdraw(withdrawDetail) {
  let withdrawResponse = await callApi(WITHDRAW, '', withdrawDetail);
}