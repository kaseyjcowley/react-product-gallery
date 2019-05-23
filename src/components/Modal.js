// @flow
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({product}) {
  return ReactDOM.createPortal(
    <div className="modal__backdrop">
      <div className="modal">
        <div className="modal__top">
          <button>Close</button>
        </div>
        <div className="modal__content">
          <div className="modal__left">
            <img
              className="modal__image"
              src={product.images.large}
              alt={product.description}
            />
          </div>
          <div className="modal__right">
            <h1>{product.name}</h1>
            <h1 className="modal__price">
              <strong>${product.price}</strong>
            </h1>
            <button className="modal__button__add-to-cart">Add to Cart</button>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="modal__bottom">
          <button className="modal__more-details">More details</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
