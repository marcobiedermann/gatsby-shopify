import { render } from '@testing-library/react';
import React from 'react';
import Product from '..';
import product from '../__fixtures__';

describe('product component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Product {...product} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
