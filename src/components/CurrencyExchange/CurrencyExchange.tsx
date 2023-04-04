import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { TiArrowSync } from 'react-icons/ti';
import ReactSelect from 'react-select';

import { currencyBYN, selectStyles } from 'utils/constants';
import { getCurrencyCode, getSelectOptions } from 'utils/functions';

import CurrencyContext from 'contexts/CurrencyContext';

import { SelectOption } from 'ts/interfaces';

import styles from './CurrencyExchange.module.scss';

function CurrencyExchange() {
  const { allCurrencies } = useContext(CurrencyContext);
  const [isLoading, setLoading] = useState(true);
  const [baseQuantity, setBaseQuantity] = useState('0');
  const [currencyList, setCurrencyList] = useState<SelectOption[]>([]);
  const [baseCurrency, setBaseCurrency] = useState('');
  const [newQuantity, setNewQuantity] = useState('0');
  const [newCurrency, setNewCurrency] = useState('');

  useEffect(() => {
    if (allCurrencies.length > 0) {
      const selectOptions = getSelectOptions(allCurrencies);
      setCurrencyList(selectOptions);
      setBaseCurrency(`${currencyBYN.Cur_ID}`);
      setNewCurrency(getCurrencyCode(allCurrencies, 'USD'));
      setLoading(false);
    }
  }, [allCurrencies]);

  const removeMinus = (e: KeyboardEvent) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', removeMinus);
    return () => document.removeEventListener('keydown', removeMinus);
  }, [baseQuantity]);

  const getValueFromOption = (value: string) =>
    value ? currencyList.find((option) => option.value === value) : '';

  return (
    <div>
      <Form className={styles.form}>
        <div className={styles.formSection}>
          <Form.Control
            type="number"
            value={baseQuantity}
            onChange={({ target }) => setBaseQuantity(target.value)}
          />
          <ReactSelect
            isLoading={isLoading}
            options={currencyList}
            value={getValueFromOption(baseCurrency)}
            onChange={(value) => setNewQuantity((value as SelectOption).value)}
            styles={selectStyles}
            className={clsx('react-select-container', styles.select)}
            classNamePrefix="react-select"
          />
        </div>
        <div className={styles.formSection}>
          <TiArrowSync />
        </div>
        <div className={styles.formSection}>
          <Form.Control
            type="number"
            value={newQuantity}
            onChange={({ target }) => setNewQuantity(target.value)}
          />
          <ReactSelect
            isLoading={isLoading}
            options={currencyList}
            value={getValueFromOption(newCurrency)}
            onChange={(value) => setNewCurrency((value as SelectOption).value)}
            styles={selectStyles}
            className={clsx('react-select-container', styles.select)}
            classNamePrefix="react-select"
          />
        </div>
      </Form>
    </div>
  );
}

export default CurrencyExchange;
