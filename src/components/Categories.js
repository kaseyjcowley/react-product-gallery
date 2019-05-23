// @flow
import React from 'react';

export function Categories(props) {
  return (
    <>
      <h3 style={{textTransform: 'uppercase'}}>All Categories</h3>
      <div className="categories">
        {props.items.map(category => (
          <div key={category.id}>
            <label>
              <input
                key={category.id}
                type="checkbox"
                name="category"
                className="category"
              />
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
