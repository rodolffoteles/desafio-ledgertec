import React from 'react';
import './SidePanel.scss'

import ProductForm from '../ProductForm';

const SidePanel = ({ updateProductsList }) => {
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
    })
    .then(() => updateProductsList());
  }

  return (
    <section className="panel" id="add-panel">
      <header>
        <h3>Add new product</h3>
      </header>

      <ProductForm 
        handleSubmit={postProduct} 
        actionWord="Add"
        />
    </section>
  )
}

export default SidePanel;