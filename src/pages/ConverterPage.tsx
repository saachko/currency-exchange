import React, { memo, useContext } from 'react';

import CurrencyContext from 'contexts/CurrencyContext';

function ConverterPage() {
  const { allCurrencies } = useContext(CurrencyContext);

  return <main>ConverterPage</main>;
}

export default memo(ConverterPage);
