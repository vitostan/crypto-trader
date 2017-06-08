function authentication() {
  var request = require('request');
  var crypto = require('crypto');

  var key = '{{ YOUR API KEY }}';
  var secret = '{{ YOUR API SECRET }}';

  var timestamp = Date.now().toString();
  var method = 'POST';
  var path = '/v1/me/sendchildorder';
  var body = JSON.stringify({
    product_code: 'BTC_JPY',
    child_order_type: 'LIMIT',
    side: 'BUY',
    price: 30000,
    size: 0.1
  });

  var text = timestamp + method + path + body;
  var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

  var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {
      'ACCESS-KEY': key,
      'ACCESS-TIMESTAMP': timestamp,
      'ACCESS-SIGN': sign,
      'Content-Type': 'application/json'
    }
  };
  request(options, function(err, response, payload) {
    console.log(payload);
  });
}

async function getBalance() {
  let res
  try {
    res = await callAPI()
  } catch (e) {
    res = 'Unavailable'
  }
  return res
}

console.log(getBalance());