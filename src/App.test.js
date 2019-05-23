import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import {categories} from './data';
import App from './App';

jest.mock('./data', () => {
  const {products} = jest.requireActual('./data');
  return {
    products,
    categories: [
      {id: 1, name: 'Category1'},
      {id: 2, name: 'Category2'},
      {id: 3, name: 'Category3'},
    ],
  };
});

// This is an integration test, we're testing multiple units together as one
describe('App', () => {
  afterEach(cleanup);

  it('should filter products by title when searched for', () => {
    // 1. Setup your environment
    const {getByPlaceholderText, getByTestId} = render(<App />);
    const input = getByPlaceholderText('Search products by name');
    const value = 'Handcrafted Robot';

    [value, value.toLowerCase()].forEach(value => {
      // 2. Do something/Perform an action
      fireEvent.change(input, {target: {value}});

      // 3. Assert the result
      const products = getByTestId('products');

      expect(products.childNodes.length).toEqual(3);
    });
  });

  // Categories
  describe('App -> Categories', () => {
    it('should not have any categories check on initial render', () => {
      // We want to look at all categories and make sure they are not checked on initial render
      // 1. Setup env
      const {getByLabelText} = render(<App />);

      // 2. Assert that no categories are checked
      categories
        .map(cat => getByLabelText(cat.name))
        .forEach(catInput => expect(catInput.checked).toEqual(false));
    });

    it('shows all products when no categories are selected', () => {
      // 2. Assert that all products are showing from all categories
    });

    it('should render in products only products with their category checked', () => {});
  });
});
