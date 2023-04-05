import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { TiArrowSync } from 'react-icons/ti';

import { currencyBYN } from 'utils/constants';
import { exchangeCurrencies, getCurrencyCode, getSelectOptions } from 'utils/functions';

import CurrencyContext from 'contexts/CurrencyContext';

import { SelectOption } from 'ts/interfaces';

import styles from './CurrencyExchange.module.scss';
import FormGroup from './FormGroup';

function CurrencyExchange() {
  const { allCurrencies } = useContext(CurrencyContext);
  const [isLoading, setLoading] = useState(true);
  const [baseQuantity, setBaseQuantity] = useState('0.00');
  const [currencyList, setCurrencyList] = useState<SelectOption[]>([]);
  const [baseCurrency, setBaseCurrency] = useState('');
  const [newQuantity, setNewQuantity] = useState('0');
  const [newCurrency, setNewCurrency] = useState('');
  const [animatedIcon, setAnimatedIcon] = useState(false);

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

  const changeCurrencies = () => {
    setBaseCurrency(newCurrency);
    setNewCurrency(baseCurrency);
    setAnimatedIcon(true);
  };

  useEffect(() => {
    if (animatedIcon) {
      setTimeout(() => setAnimatedIcon(false), 200);
    }
  }, [animatedIcon]);

  useEffect(() => {
    const exchangedQuantity = exchangeCurrencies(
      baseQuantity,
      baseCurrency,
      newCurrency,
      allCurrencies
    );
    setNewQuantity(exchangedQuantity);
  }, [baseQuantity, baseCurrency, newCurrency]);

  return (
    <div>
      <Form className={styles.form}>
        <FormGroup
          quantity={baseQuantity}
          setQuantity={setBaseQuantity}
          isLoading={isLoading}
          currencyList={currencyList}
          currencyCode={baseCurrency}
          setCurrencyCode={setBaseCurrency}
        />
        <div
          className={clsx(styles.iconWrapper, {
            [styles.animatedIcon]: animatedIcon,
          })}
          onClick={changeCurrencies}
          aria-hidden
        >
          <TiArrowSync />
        </div>
        <FormGroup
          quantity={newQuantity}
          setQuantity={setNewQuantity}
          isLoading={isLoading}
          currencyList={currencyList}
          currencyCode={newCurrency}
          setCurrencyCode={setNewCurrency}
          disabled
        />
      </Form>
    </div>
  );
}

export default CurrencyExchange;
