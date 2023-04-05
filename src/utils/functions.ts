import { Currency, SelectOption } from 'ts/interfaces';

import { currencyBYN } from './constants';

const getSelectOptions = (currencies: Currency[]) => {
  const options: SelectOption[] = currencies.map((item) => ({
    value: `${item.Cur_ID}`,
    label: `${item.Cur_Abbreviation} (${item.Cur_Name})`,
  }));
  return options;
};

const getCurrencyCode = (currencies: Currency[], id: string) => {
  const currency = currencies.find((item) => item.Cur_Abbreviation === id);
  if (currency) {
    return `${currency.Cur_ID}`;
  }
  return '';
};

const exchangeCurrencies = (
  baseQuantity: string,
  baseCurrency: string,
  newCurrency: string,
  currencies: Currency[]
) => {
  if (baseCurrency === `${currencyBYN.Cur_ID}`) {
    const currency = currencies.find((item) => `${item.Cur_ID}` === newCurrency);
    if (currency) {
      return `${(
        (Number(baseQuantity) * currency.Cur_Scale) /
        currency.Cur_OfficialRate
      ).toFixed(2)}`;
    }
  }
  if (newCurrency === `${currencyBYN.Cur_ID}`) {
    const currency = currencies.find((item) => `${item.Cur_ID}` === baseCurrency);
    if (currency) {
      return `${(
        (Number(baseQuantity) * currency.Cur_OfficialRate) /
        currency.Cur_Scale
      ).toFixed(2)}`;
    }
  }
  if (
    baseCurrency !== `${currencyBYN.Cur_ID}` &&
    newCurrency !== `${currencyBYN.Cur_ID}`
  ) {
    const currencyBase = currencies.find((item) => `${item.Cur_ID}` === baseCurrency);
    const currencyNew = currencies.find((item) => `${item.Cur_ID}` === newCurrency);
    if (currencyBase && currencyNew) {
      const baseInBYN =
        (Number(baseQuantity) * currencyBase.Cur_OfficialRate) / currencyBase.Cur_Scale;
      return `${(
        (baseInBYN * currencyNew.Cur_Scale) /
        currencyNew.Cur_OfficialRate
      ).toFixed(2)}`;
    }
  }
  return '';
};

export { getSelectOptions, getCurrencyCode, exchangeCurrencies };
