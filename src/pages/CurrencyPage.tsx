import React, { memo, useContext } from 'react';

import CurrencyContext from 'contexts/CurrencyContext';

function CurrencyPage() {
  const { allCurrencies } = useContext(CurrencyContext);

  return <main>CurrencyPage</main>;
}

export default memo(CurrencyPage);
