import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ReactSelect from 'react-select';

import { selectStyles } from 'utils/constants';
import { getSelectOptions } from 'utils/functions';

import CurrencyContext from 'contexts/CurrencyContext';

import { SelectOption } from 'ts/interfaces';
import SetState from 'ts/types';

import styles from './CurrencyTable.module.scss';

interface BaseCurrencySelectorProps {
  currencyCode: string;
  setCurrencyCode: SetState<string>;
}

function BaseCurrencySelector({
  currencyCode,
  setCurrencyCode,
}: BaseCurrencySelectorProps) {
  const { allCurrencies } = useContext(CurrencyContext);
  const [currencyList, setCurrencyList] = useState<SelectOption[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (allCurrencies.length > 0) {
      const selectOptions = getSelectOptions(allCurrencies);
      setCurrencyList(selectOptions);
      setLoading(false);
    }
  }, [allCurrencies]);

  const getValueFromOption = (value: string) =>
    value ? currencyList.find((option) => option.value === value) : '';

  useEffect(() => {
    localStorage.setItem('currencyCode', currencyCode);
  }, [currencyCode]);

  return (
    <Form.Group className={styles.formGroup}>
      <Form.Label>Выберите базовую валюту:</Form.Label>
      <ReactSelect
        isLoading={isLoading}
        options={currencyList}
        value={getValueFromOption(currencyCode)}
        onChange={(value) => setCurrencyCode((value as SelectOption).value)}
        styles={selectStyles}
        className={clsx('react-select-container', styles.select)}
        classNamePrefix="react-select"
      />
    </Form.Group>
  );
}

export default BaseCurrencySelector;
