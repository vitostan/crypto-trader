var apiType = require('./model/apiType.js');
var callApi = require('./model/query.js');

var result;

async function main() {
  try {
    result = await callApi(apiType.getBalance);
    console.log(result);
  } catch (e) {
    return 'exception';
  }
}

main();