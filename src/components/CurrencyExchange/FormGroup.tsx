import clsx from 'clsx';
import React from 'react';
import { Form } from 'react-bootstrap';
import ReactSelect from 'react-select';

import { selectStyles } from 'utils/constants';

import { SelectOption } from 'ts/interfaces';
import SetState from 'ts/types';

import styles from './CurrencyExchange.module.scss';

interface FormGroupProps {
  quantity: string;
  setQuantity: SetState<string>;
  isLoading: boolean;
  currencyList: SelectOption[];
  currencyCode: string;
  setCurrencyCode: SetState<string>;
  disabled?: boolean;
}

function FormGroup({
  quantity,
  setQuantity,
  isLoading,
  currencyList,
  currencyCode,
  setCurrencyCode,
  disabled,
}: FormGroupProps) {
  const getValueFromOption = (value: string) =>
    value ? currencyList.find((option) => option.value === value) : '';

  const removeZeros = () => {
    if (!disabled && quantity === '0.00') {
      setQuantity('');
    }
  };

  return (
    <div className={styles.formSection}>
      <Form.Control
        type="number"
        value={quantity}
        onChange={({ target }) => setQuantity(target.value)}
        disabled={disabled}
        onFocus={removeZeros}
      />
      <ReactSelect
        isLoading={isLoading}
        options={currencyList}
        value={getValueFromOption(currencyCode)}
        onChange={(value) => setCurrencyCode((value as SelectOption).value)}
        styles={selectStyles}
        className={clsx('react-select-container', styles.select)}
        classNamePrefix="react-select"
      />
    </div>
  );
}

FormGroup.defaultProps = {
  disabled: false,
};

export default FormGroup;
