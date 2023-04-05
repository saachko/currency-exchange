import React, { useState } from 'react';

import { currencyBYN } from 'utils/constants';

import BaseCurrencySelector from './BaseCurrencySelector';
import styles from './CurrencyTable.module.scss';

function CurrencyTable() {
  const codeFromLocalStorage = localStorage.getItem('currencyCode');
  const [baseCurrency, setBaseCurrency] = useState(
    codeFromLocalStorage || `${currencyBYN.Cur_ID}`
  );

  return (
    <div className={styles.content}>
      <BaseCurrencySelector
        currencyCode={baseCurrency}
        setCurrencyCode={setBaseCurrency}
      />
    </div>
  );
}

export default CurrencyTable;
