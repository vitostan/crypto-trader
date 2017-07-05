import crypto from 'crypto';

export function getReqHeaderByAuth(key, secret, method, apiAction, body) {
  let timestamp = Date.now().toString();
  let text = timestamp + method + apiAction + body;
  let sign = crypto.createHmac('sha256', secret).update(text).digest('hex');
  return {
    'ACCESS-KEY': key,
    'ACCESS-TIMESTAMP': timestamp,
    'ACCESS-SIGN': sign,
    'Content-Type': 'application/json'
  }
}