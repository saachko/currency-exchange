import React, { memo } from 'react';

import CurrencyTable from 'components/CurrencyTable/CurrencyTable';

function CurrencyPage() {
  return (
    <main>
      <CurrencyTable />
    </main>
  );
}

export default memo(CurrencyPage);
