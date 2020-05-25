import React, { useState } from 'react';
import './ProductForm.scss';

const ProductForm = ({ handleSubmit, actionWord }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const localHandleSubmit = (event) => {
    event.preventDefault();

    try {
      handleSubmit(category, description);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <form>
      { error && <div class="alert">Could not {actionWord.toLowercase()} product. Please try again.</div> }

      <div className="form-group">
        <label htmlFor="input-category">Category</label>
        <input
          id="input-category"
          type="text" 
          name="category" 
          value={category} 
          onChange={e => {setCategory(e.target.value)}}/>
      </div>

      <div className="form-group">
        <label htmlFor="input-description">Description</label>
        <textarea
          id="input-description"
          name="description"
          value={description} 
          onChange={e => {setDescription(e.target.value)}}/>
      </div>

      <button className="btn-green" onClick={localHandleSubmit}>{actionWord}</button>
    </form>
  );
};

export default ProductForm;