import React from 'react';

export function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Amazing Store</h1>
      <input type="text" placeholder="Search products by name" className="header__search" />
      <button className="header__cart">My Cart <div>2</div></button>
    </header>
  );
}
