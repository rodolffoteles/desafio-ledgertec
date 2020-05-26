import React, { useEffect } from 'react';
import './ListPanel.scss';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';

import CategoryList from '../CategoryList';
import ProductList from '../ProductList';

const ListPanel = ({ error, products, updateProductsList, showEditPanel }) => {
  useEffect(() => {
    updateProductsList();
  }, [updateProductsList]);

  // Get the header title from current url
  const location = useLocation();
  const headerTitle = location.pathname.slice(1);

  // Create array with unique categories
  let categories = products.map(product => product.Category.category);
  categories = [...new Set(categories)]; 

  return (
    <section className="list-panel">
      <header>
        <h3>{headerTitle} list</h3>

        <nav>
          <NavLink to="/products" className="tab">Products</NavLink>
          <NavLink to="/categories" className="tab" >Categories</NavLink>
        </nav>
      </header>
      
      <div className="scrollable">
        <Switch>
          <Route path="/categories">
            <CategoryList categories={categories}/>
          </Route>

          <Route path="/products">
            <ProductList 
              products={products}
              updateProductsList={updateProductsList}
              showEditPanel={showEditPanel}/>
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default ListPanel;