import {
  callApi
} from '../../util';
import {
  CANCEL_CHILD_ORDER,
  CANCEL_PARENT_ORDER,
  CANCEL_ALL_CHILD_ORDERS
} from './apiAction.js';

export async function cancelTrade(acceptanceId, marketCode) {
  let cancelResult = callApi(CANCEL_CHILD_ORDER, {
    product_code: marketCode
  });
  console.log('cancelResult: ', cancelResult);
  return cancelResult;
}