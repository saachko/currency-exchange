import { createContext } from 'react';

import { Currency } from 'ts/interfaces';
import SetState from 'ts/types';

interface CurrencyContextValues {
  allCurrencies: Currency[];
  setAllCurrencies: SetState<Currency[]>;
}

const defaultValues = {
  allCurrencies: [],
  setAllCurrencies: () => {},
};

const CurrencyContext = createContext<CurrencyContextValues>(defaultValues);

export default CurrencyContext;
