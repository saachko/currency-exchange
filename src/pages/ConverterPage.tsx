import React, { memo } from 'react';

import CurrencyExchange from 'components/CurrencyExchange/CurrencyExchange';

function ConverterPage() {
  return (
    <main>
      <CurrencyExchange />
    </main>
  );
}

export default memo(ConverterPage);
