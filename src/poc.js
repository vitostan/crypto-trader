import request from 'request-promise';
import crypto from 'crypto';
import {
  callApi
} from './exchangePlatform/viabtc';
import {
  REQ_TYPE
} from './sharedConst';


var poc = async function() {
  // let qs = {
  //   market: 'BCCCNY'
  // };
  // let getReqParam = {
  //   url: HOST_VIABTC + '/market/ticker',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   qs: qs
  // };
  // let result = await request(getReqParam);
  // callApi(REQ_TYPE.PUB_GET, 'a', 'b')
  // console.log('result = ', result);
  let maxInt = Number.MAX_SAFE_INTEGER;
  let minInt = Number.MIN_SAFE_INTEGER;
  console.log(maxInt);
  console.log(maxInt.toString(2).length);
  console.log(minInt);
  console.log(minInt.toString(2).length);
  console.log(maxInt + 1);
  console.log((maxInt + 1) == (maxInt + 2));
  let maxValue = Number.MAX_VALUE;
  let minValue = Number.MIN_VALUE;
  console.log('maxValue =', maxValue); //2^53-1
  console.log('minValue =', minValue);
  console.log('maxValue + 1 =', maxValue + 1);
  console.log('-maxValue - 1 =', -maxValue - 1);
  console.log('minValue / 2 =', minValue / 2);
  let positiveInfinity = Number.POSITIVE_INFINITY;
  let negativeInfinity = Number.NEGATIVE_INFINITY;
  console.log('positiveInfinity =', positiveInfinity);
  console.log('negativeInfinity =', negativeInfinity);
  console.log('positiveInfinity + 1 =', positiveInfinity);
  console.log('negativeInfinity - 1 =', negativeInfinity);
  console.log('positiveInfinity > maxValue ?', positiveInfinity > maxValue);
  console.log('negativeInfinity < -maxValue ?', negativeInfinity < -maxValue);
}

poc();