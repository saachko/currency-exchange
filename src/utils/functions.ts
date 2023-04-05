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

const getTableValues = (code: string, allCurrencies: Currency[]) => {
  if (code === `${currencyBYN.Cur_ID}`) {
    const list = allCurrencies.map((item) => ({
      id: item.Cur_ID,
      abbr: item.Cur_Abbreviation,
      name: item.Cur_Name,
      scale: item.Cur_Scale,
      rate: item.Cur_OfficialRate,
      baseName: currencyBYN.Cur_Abbreviation,
    }));
    return list.filter((item) => `${item.id}` !== code);
  }
  const currentCurrency = allCurrencies.find(
    (item) => `${item.Cur_ID}` === code
  ) as Currency;
  const baseName = currentCurrency.Cur_Abbreviation;
  const rateToBYN = currentCurrency.Cur_Scale / currentCurrency.Cur_OfficialRate;
  const list = allCurrencies.map((item) => ({
    id: item.Cur_ID,
    abbr: item.Cur_Abbreviation,
    name: item.Cur_Name,
    scale: 1,
    rate: ((rateToBYN * item.Cur_OfficialRate) / item.Cur_Scale).toFixed(4),
    baseName,
  }));
  return list.filter((item) => `${item.id}` !== code);
};

export { getSelectOptions, getCurrencyCode, exchangeCurrencies, getTableValues };
