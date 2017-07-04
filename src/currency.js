import {
  currency,
  currencyCode,
  getCurrencyBasedOn
} from './util';

async function getCurrency() {
  try {
    await getCurrencyBasedOn(currencyCode.JPY);
    console.log(currency);
  } catch (e) {
    console.log('exception = ', e);
  }
}

getCurrency();