import request from 'request-promise';
import {
  getReqHeaderByAuth
} from './apiAuth.js';
import {
  HOST,
  KEY,
  SECRET
} from './apiProfile.js';

export async function callApi(apiAction, body) {
  let requestParam;
  if (body && body.length > 0) {
    requestParam = buildPostRequestParam(apiAction, body);
  } else {
    requestParam = buildGetRequestParam(apiAction);
  }
  return await request(requestParam);
}

function buildGetRequestParam(apiAction) {
  return {
    url: HOST + apiAction,
    headers: getReqHeaderByAuth(KEY, SECRET, 'GET', apiAction, '')
  };
}

function buildPostRequestParam(apiAction, body) {
  let tmp = HOST + apiAction;
  console.log('url = ', tmp);
  return {
    url: HOST + apiAction,
    method: 'POST',
    headers: getReqHeaderByAuth(KEY, SECRET, 'POST', apiAction, body),
    body: body,
    json: true
  };
}