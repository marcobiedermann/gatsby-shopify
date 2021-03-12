import { render } from '@testing-library/react';
import React from 'react';
import Products from '..';
import products from '../__fixtures__';

describe('products component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Products {...products} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
