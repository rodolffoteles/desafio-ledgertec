import React from 'react';
import './CategoryList.scss';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div>
        {categories.map((category, index) => 
          <article className="category" key={index}>
            {category}
            
            <Link to={{
              pathname: "/products",
              search: `?category=${category}`,
            }}>
              Check products
            </Link>
          </article>
        )}
    </div>
  );
};

export default CategoryList;