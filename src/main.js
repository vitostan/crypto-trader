import {
  HOST,
  PATH_PREFIX,
  KEY,
  SECRET
} from './model/apiProfile.js';
import {
  GET_BALANCE
} from './model/apiAction.js';
import {
  buildGetRequestParam,
  callApi
} from './service/apiCaller.js'

async function main() {
  try {
    var apiAction = GET_BALANCE; //getcollateral, getexecutions
    var requestParam = buildGetRequestParam(HOST, PATH_PREFIX, apiAction, KEY, SECRET);
    var result = await callApi(requestParam, apiAction);
    console.log('result = ', result);
  } catch (e) {
    console.log('exception = ', e);
  }
}

//app start from here
main();