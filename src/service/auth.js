import crypto from 'crypto';

export default function getReqHeaderByAuth(key, secret, method, pathPrefix, apiAction, body) {
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