var request = require('request-promise');
var apiType = require('./apiType.js');
var passAuth = require('./auth.js');

const query = {
  method: 'GET',
  body: JSON.stringify({
    //   product_code: 'BTC_JPY',
    //   child_order_type: 'LIMIT',
    //   side: 'BUY',
    //   price: 30000,
    //   size: 0.1
  })
}

async function callApi(actionType) {
  var host = 'https://api.bitflyer.jp';
  var pathPrefix = '/v1/me/';
  switch (actionType) {
    case apiType.getBalance:
      var param = {
        url: host + pathPrefix + actionType,
        method: query.method,
        body: query.body,
        headers: passAuth(query.method, pathPrefix, actionType, query.body)
      };
      return await getBalance(param);
  }
}

async function getBalance(param) {
  return await request(param);
}