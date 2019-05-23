import React from 'react';
import './App.css';
import {products, categories} from './data';
import {Header} from './components/Header';
import {Categories} from './components/Categories';
import {Products} from './components/Products';
import {Modal} from './components/Modal';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="sidebar">
          <Categories items={categories} />
        </div>
        <div className="content">
          <Products items={products} />
        </div>
      </main>
      <Modal product={products[0]} />
    </>
  );
}
