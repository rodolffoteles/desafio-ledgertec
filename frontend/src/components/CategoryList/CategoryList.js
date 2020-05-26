import React from 'react';
import './CategoryList.scss';

const CategoryList = ({ categories }) => {
  return (
    <div>
        {categories.map((category, index) => 
          <article className="category" key={index}>
            {category}
          </article>
        )}
    </div>
  );
};

export default CategoryList;