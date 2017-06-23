import {
  GET_BALANCE,
  GET_MARKET_LIST,
  GET_BOARD,
  GET_MARGIN,
  GET_BANK_ACCOUNTS
} from './feature/inquiry';
import {
  callApi
} from './util';

async function main() {
  try {
    // var marketList = await callApi(GET_MARKET_LIST);
    // console.log('==============================');
    // console.log('Market List = ', marketList);
    // console.log('==============================');
    // console.log('\n');
    // var balance = await callApi(GET_BALANCE);
    // console.log('==============================');
    // console.log('Balance = ', balance);
    // console.log('==============================');
    // console.log('\n');
    // var margin = await callApi(GET_MARGIN);
    // console.log('==============================');
    // console.log('Margin = ', margin);
    // console.log('==============================');
    // console.log('\n');
    var bankAccounts = await callApi(GET_BANK_ACCOUNTS);
    console.log('==============================');
    console.log('bankAccounts = ', bankAccounts);
    console.log('==============================');
    console.log('\n');
  } catch (e) {
    console.log('exception = ', e);
  }
}

//app start from here
main();