import React, { useState }from 'react';
import './SidePanel.scss'

const SidePanel = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: Send data to api
    alert(description);
  }

  return (
    <div className="side-panel">
      <h3>Add new product</h3>

      <form>
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

        <button className="btn-green" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default SidePanel;