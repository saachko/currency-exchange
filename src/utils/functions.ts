import { Currency, SelectOption } from 'ts/interfaces';

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

export { getSelectOptions, getCurrencyCode };
