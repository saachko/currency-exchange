import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { getTableValues } from 'utils/functions';

import CurrencyContext from 'contexts/CurrencyContext';

import { TableValues } from 'ts/interfaces';

import styles from './CurrencyTable.module.scss';

interface CurrencyTableProps {
  baseCurrencyCode: string;
}

function CurrencyTable({ baseCurrencyCode }: CurrencyTableProps) {
  const { allCurrencies } = useContext(CurrencyContext);
  const [tableValues, setTableValues] = useState<TableValues[]>([]);

  useEffect(() => {
    if (allCurrencies) {
      const values: TableValues[] = getTableValues(baseCurrencyCode, allCurrencies);
      setTableValues(values);
    }
  }, [allCurrencies, baseCurrencyCode]);

  return (
    <Table responsive className={styles.table} striped>
      <tbody>
        {tableValues.map((item) => (
          <tr key={item.id}>
            <td>
              {item.scale} {item.abbr}
            </td>
            <td className={styles.hidden}>({item.name})</td>
            <td>
              {item.rate} {item.baseName}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CurrencyTable;
