import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const ConverterPage = lazy(() => import('pages/ConverterPage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage'));

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === '/') {
      navigate('/converter');
    }
  }, [currentPath]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="converter" element={<ConverterPage />} />
          <Route path="currency" element={<CurrencyPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
