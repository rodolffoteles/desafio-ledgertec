import React, { useState, useEffect }from 'react';
import './SidePanel.scss'

import ProductForm from '../ProductForm';
import Product from '../Product';

const SidePanel = () => {
  const postProduct = (category, description) => {
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category,
        description: description
      })
    });
  }

  return (
    <div className="side-panel">
      <h3>Add new product</h3>

      <ProductForm handleSubmit={postProduct} actionWord="Add"/>
    </div>
  )
}

export default SidePanel;