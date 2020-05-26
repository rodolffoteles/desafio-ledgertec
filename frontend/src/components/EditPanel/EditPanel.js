import React from 'react';
import './EditPanel.scss';

import ProductForm from '../ProductForm';

const EditPanel = ({ product, updateProductsList, closeEditPanel }) => {

  const updateProduct = (category, description) => {
    fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: category,
        description: description
      })
    })
    .then(() => {
      updateProductsList();
      closeEditPanel();
    });
  }

  const handleClose = (event) => {
    event.preventDefault();
    closeEditPanel();
  }

  const closeIcon = '\u2715';

  return (
    <section className="panel" id="edit-panel">
      <header>
        <h3>Edit product</h3>

        <button onClick={handleClose}>{closeIcon}</button>
      </header>

      <ProductForm 
        handleSubmit={updateProduct} 
        actionWord="Edit"
        initialCategory={product.Category.category}
        initialDescription={product.description}/>
    </section>
  );
};

export default EditPanel;