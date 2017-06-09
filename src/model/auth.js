var crypto = require('crypto');

function passAuth(method, pathPrefix, apiType, body) {
  var key = 'SRuasFmzd3a2RwK4HtZhZW';
  var secret = 'ob0K0iEvt+RJM4F4qUCrPL6zFdqaQPJagJ7WD9ej64s=';
  var timestamp = Date.now().toString();
  var text = timestamp + method + pathPrefix + apiType + body;
  var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');
  return {
    'ACCESS-KEY': key,
    'ACCESS-TIMESTAMP': timestamp,
    'ACCESS-SIGN': sign,
    'Content-Type': 'application/json'
  }
}