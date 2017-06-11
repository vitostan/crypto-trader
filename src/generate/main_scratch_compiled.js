

//actions
let main = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      var requestParam = buildRequestParam(host, pathPrefix, apiAction, method, body, key, secret);
      var result = yield callApi(requestParam, apiAction);
      console.log('result = ', result);
    } catch (e) {
      console.log('exception = ', e);
    }
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

let callApi = (() => {
  var _ref2 = _asyncToGenerator(function* (requestParam, apiAction) {
    switch (apiAction) {
      case apiActions.getBalance:
        return yield getBalance(requestParam);
    }
  });

  return function callApi(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})();

let getBalance = (() => {
  var _ref3 = _asyncToGenerator(function* (param) {
    return yield request(param);
  });

  return function getBalance(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

//executions


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//variables
//libs
var request = require('request-promise');
var crypto = require('crypto');

//self_defined
var apiActions = {
  getBalance: 'getBalance',
  getMarginStatus: 'getcollateral',
  getHistory: 'getexecutions'
};
var requestParam = {
  url: '',
  method: '',
  body: '',
  headers: ''
};

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
  };
}

main();
