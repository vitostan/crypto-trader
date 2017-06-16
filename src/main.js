//self_defined
import {
  GET_BALANCE
} from './model/apiAction.js';

import {
  buildRequestParam,
  callApi
} from './service/apiCaller.js'

var requestParam = {
  url: '',
  method: '',
  body: '',
  headers: ''
}

var host = 'https://api.bitflyer.jp';
var pathPrefix = '/v1/me/';
var method = 'GET';
var body = JSON.stringify({
  //   product_code: 'BTC_JPY',
  //   child_order_type: 'LIMIT',
  //   side: 'BUY',
  //   price: 30000,
  //   size: 0.1
});
var key = 'SRuasFmzd3a2RwK4HtZhZW';
var secret = 'ob0K0iEvt+RJM4F4qUCrPL6zFdqaQPJagJ7WD9ej64s=';

//actions
async function main() {
  try {
    var apiAction = GET_BALANCE; //getcollateral, getexecutions
    var requestParam = buildRequestParam(host, pathPrefix, apiAction, method, body, key, secret);
    var result = await callApi(requestParam, apiAction);
    console.log('result = ', result);
  } catch (e) {
    console.log('exception = ', e);
  }
}

//executions
main();