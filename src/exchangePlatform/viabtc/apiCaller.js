import {
  REQ_TYPE
} from '../../sharedConst';

export function callApi(reqType, apiAction, reqBody) {
  getReqBody(reqType, apiAction, reqBody);
}

var getReqBody = function(reqType, apiAction, reqBody) {
  let lookupTable = {
    'PUBLIC_GET': buildPublicGetReqBody,
    'PRIVATE_GET': buildPrivateGetReqBody,
    'PRIVATE_POST': buildPrivatePostReqBody
  };
  if (typeof lookupTable[reqType] !== 'function')
    throw new Error('Invalid REQ_TYPE');
  return lookupTable[reqType](apiAction, reqBody);
};

var buildPublicGetReqBody = function(apiAction, reqBody) {
  console.log('public get');
};

var buildPrivateGetReqBody = function(apiAction, reqBody) {
  console.log('private get');
};

var buildPrivatePostReqBody = function(apiAction, reqBody) {
  console.log('private post');
};