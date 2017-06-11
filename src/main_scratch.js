//variables
//libs
var request = require('request-promise');
var crypto = require('crypto');

//self_defined
var apiActions = {
  getBalance: 'getBalance',
  getMarginStatus: 'getcollateral',
  getHistory: 'getexecutions'
}
var requestParam = {
  url: '',
  method: '',
  body: '',
  headers: ''
}

var host = 'https://api.bitflyer.jp';
var pathPrefix = '/v1/me/';
var apiAction = 'getBalance'; //getcollateral, getexecutions
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
    var requestParam = buildRequestParam(host, pathPrefix, apiAction, method, body, key, secret);
    var result = await callApi(requestParam, apiAction);
    console.log('result = ', result);
  } catch (e) {
    console.log('exception = ', e);
  }
}

function buildRequestParam(host, pathPrefix, apiAction, method, body, key, secret) {
  return {
    url: host + pathPrefix + apiAction,
    method: method,
    body: body,
    headers: getReqHeaderByAuth(key, secret, method, pathPrefix, apiAction, body)
  };
}

function getReqHeaderByAuth(key, secret, method, pathPrefix, apiAction, body) {
  var timestamp = Date.now().toString();
  var text = timestamp + method + pathPrefix + apiAction + body;
  var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');
  return {
    'ACCESS-KEY': key,
    'ACCESS-TIMESTAMP': timestamp,
    'ACCESS-SIGN': sign,
    'Content-Type': 'application/json'
  }
}

async function callApi(requestParam, apiAction) {
  switch (apiAction) {
    case apiActions.getBalance:
      return await getBalance(requestParam);
  }
}

async function getBalance(param) {
  return await request(param);
}

//executions
main();