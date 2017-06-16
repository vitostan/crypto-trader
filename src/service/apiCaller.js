import request from 'request-promise';
import getReqHeaderByAuth from './auth.js';
import {
  GET_BALANCE,
  GET_MARGIN_STATUS,
  GET_HISTORY
} from '../model/apiAction.js';

export function buildRequestParam(host, pathPrefix, apiAction, method, body, key, secret) {
  return {
    url: host + pathPrefix + apiAction,
    method: method,
    body: body,
    headers: getReqHeaderByAuth(key, secret, method, pathPrefix, apiAction, body)
  };
}

export async function callApi(requestParam, apiAction) {
  switch (apiAction) {
    case GET_BALANCE:
      return await getBalance(requestParam);
  }
}

async function getBalance(param) {
  return await request(param);
}