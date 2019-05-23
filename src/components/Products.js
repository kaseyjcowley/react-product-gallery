// @flow
import React from 'react';

export function Products(props) {
  return (
    <>
      <h1>Creams &amp; Gels</h1>
      <div className="products">
        {props.items.map(product => (
          <div key={product.id} className="product">
            <img src={product.images.medium} alt={product.description} />
            <h3>{product.name}</h3>
            <h3 className="product__price">${product.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
