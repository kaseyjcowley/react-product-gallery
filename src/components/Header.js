import React from 'react';

export function Header({search, setSearch}) {
  return (
    <header className="header">
      <h1 className="header__title">Amazing Store</h1>
      <input
        value={search}
        onChange={({target: {value}}) => setSearch(value)}
        type="text"
        placeholder="Search products by name"
        className="header__search"
      />
      <button className="header__cart">
        My Cart <div>2</div>
      </button>
    </header>
  );
}
