import React from 'react';
import './MainPage.scss';

import SidePanel from '../../components/SidePanel';
import ProductList from '../../components/ProductList';

const MainPage = () => {
  return (
    <main>
      <SidePanel/>
      <ProductList/>
    </main>
  )
};

export default MainPage;