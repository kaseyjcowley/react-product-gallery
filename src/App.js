import React from 'react';
import './App.css';
import {products, categories} from './data';
import {Header} from './components/Header';
import {Categories} from './components/Categories';
import {Products} from './components/Products';

export default function App() {
  const [search, setSearch] = React.useState('');
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="main">
        <div className="sidebar">
          <Categories items={categories} />
        </div>
        <div className="content">
          <Products items={products} search={search} />
        </div>
      </main>
    </>
  );
}
