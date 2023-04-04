import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      <Footer />
    </>
  );
}

export default App;
