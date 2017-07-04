import request from 'request-promise';

const HOST_FIXER = 'http://api.fixer.io';
const GET_LATEST = '/latest';

export const currencyCode = {
  JPY: 'JPY',
  CNY: 'CNY',
  USD: 'USD'
};

export var currencyByJPY = {
  cny: 0,
  usd: 0
}

export async function getCurrencyBasedOn(baseCurrency) {
  let requestParam = {
    url: HOST_FIXER + GET_LATEST,
    qs: {
      base: baseCurrency
    }
  };
  let currStr = await request(requestParam);
  let currObj = JSON.parse(currStr);
  currencyByJPY = {
    cny: currObj.rates.CNY,
    usd: currObj.rates.USD
  };
}