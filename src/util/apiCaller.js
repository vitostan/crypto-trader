import request from 'request-promise';
import {
  getReqHeaderByAuth
} from './apiAuth.js';
import {
  HOST,
  KEY,
  SECRET
} from './apiProfile.js';

export async function callApi(apiAction, queryString, bodyJSObj) {
  let requestParam;
  if (bodyJSObj) {
    requestParam = buildPostRequestParam(apiAction, bodyJSObj);
  } else {
    requestParam = buildGetRequestParam(apiAction, queryString);
  }
  return await request(requestParam);
}

function buildGetRequestParam(apiAction, queryString) {
  return {
    url: HOST + apiAction,
    headers: getReqHeaderByAuth(KEY, SECRET, 'GET', apiAction, ''),
    qs: queryString
  };
}

function buildPostRequestParam(apiAction, bodyJSObj) {
  let body = JSON.stringify(bodyJSObj);
  return {
    url: HOST + apiAction,
    method: 'POST',
    headers: getReqHeaderByAuth(KEY, SECRET, 'POST', apiAction, body),
    body: body
  };
}