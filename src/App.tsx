import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ConverterPage from 'pages/ConverterPage';
import CurrencyPage from 'pages/CurrencyPage';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

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
      <Routes>
        <Route index path="converter" element={<ConverterPage />} />
        <Route path="currency" element={<CurrencyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
