import request from 'request-promise';
import crypto from 'crypto';
import {
  HOST_VIABTC,
  KEY_VIABTC,
  SECRET_VIABTC,
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
  callApi(REQ_TYPE.PUB_GET, 'a', 'b')
    // console.log('result = ', result);
}

poc();