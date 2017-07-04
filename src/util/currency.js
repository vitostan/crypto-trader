//API http://fixer.io/
import request from 'request-promise';

const HOST_FIXER = 'https://api.fixer.io';
const GET_LATEST = '/latest';

export const currencyCode = {
  JPY: 'JPY',
  CNY: 'CNY',
  USD: 'USD'
};

export var currency = {};

export async function getCurrencyBasedOn(baseCurrency) {
  let requestParam = {
    url: HOST_FIXER + GET_LATEST,
    qs: {
      base: baseCurrency,
      symbols: currencyCode.CNY + ',' + currencyCode.USD
    }
  };
  let currStr = await request(requestParam);
  let currObj = JSON.parse(currStr);
  currency = currObj;
}