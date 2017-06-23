import crypto from 'crypto';

export function getReqHeaderByAuth(key, secret, method, apiAction, body) {
  var timestamp = Date.now().toString();
  var text = timestamp + method + apiAction + body;
  var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');
  return {
    'ACCESS-KEY': key,
    'ACCESS-TIMESTAMP': timestamp,
    'ACCESS-SIGN': sign,
    'Content-Type': 'application/json'
  }
}