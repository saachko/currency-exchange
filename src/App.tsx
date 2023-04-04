import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

import getCurrencies from 'utils/api';

import CurrencyContext from 'contexts/CurrencyContext';

import { Currency } from 'ts/interfaces';

const ConverterPage = lazy(() => import('pages/ConverterPage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage'));

function App() {
  const [allCurrencies, setAllCurrencies] = useState<Currency[]>([]);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === '/') {
      navigate('/converter');
    }
  }, [currentPath]);

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setAllCurrencies(currencies);
    })();
  }, []);

  const currencies = useMemo(
    () => ({
      allCurrencies,
      setAllCurrencies,
    }),
    [allCurrencies]
  );

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <CurrencyContext.Provider value={currencies}>
          <Routes>
            <Route index path="converter" element={<ConverterPage />} />
            <Route path="currency" element={<CurrencyPage />} />
          </Routes>
        </CurrencyContext.Provider>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
