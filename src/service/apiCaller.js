import request from 'request-promise';
import getReqHeaderByAuth from '../util';
import {
  GET_BALANCE,
  GET_MARGIN_STATUS,
  GET_HISTORY
} from '../model/apiAction.js';

export function buildGetRequestParam(host, pathPrefix, apiAction, key, secret) {
  return {
    url: host + pathPrefix + apiAction,
    method: 'GET',
    body: '',
    headers: getReqHeaderByAuth(key, secret, 'GET', pathPrefix, apiAction, '')
  };
}

export function buildPostRequestParam(host, pathPrefix, apiAction, body, key, secret) {
  return {
    url: host + pathPrefix + apiAction,
    method: 'POST',
    body: body,
    headers: getReqHeaderByAuth(key, secret, 'POST', pathPrefix, apiAction, body)
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