import React, { useState } from 'react';

import { currencyBYN } from 'utils/constants';

import BaseCurrencySelector from './BaseCurrencySelector';
import styles from './CurrencyTable.module.scss';
import Table from './Table';

function CurrencyTable() {
  const codeFromLocalStorage = localStorage.getItem('currencyCode');
  const nameFromLocalStorage = localStorage.getItem('currencyName');
  const [baseCurrency, setBaseCurrency] = useState(
    codeFromLocalStorage || `${currencyBYN.Cur_ID}`
  );

  return (
    <div className={styles.content}>
      <BaseCurrencySelector
        currencyCode={baseCurrency}
        setCurrencyCode={setBaseCurrency}
      />
      <p className={styles.note}>
        Курсы валют на {new Date().toLocaleString('ru-Ru').slice(0, 10)}
      </p>
      <Table
        baseCurrencyCode={baseCurrency}
        baseCurrencyName={nameFromLocalStorage || currencyBYN.Cur_Abbreviation}
      />
    </div>
  );
}

export default CurrencyTable;
