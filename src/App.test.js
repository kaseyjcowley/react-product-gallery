import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import App from './App';

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
