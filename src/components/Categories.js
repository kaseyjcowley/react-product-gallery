// @flow
import React from 'react';

export function Categories(props) {
  return (
    <>
      <h3 style={{textTransform: 'uppercase'}}>All Categories</h3>
      <div className="categories">
        {props.items.map(category => (
          <a key={category.id} href="#" className="category">{category.name}</a>
        ))}
      </div>
    </>
  );
}
