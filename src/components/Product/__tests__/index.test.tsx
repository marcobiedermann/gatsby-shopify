import { render } from '@testing-library/react';
import React from 'react';
import Product from '..';
import product from '../__fixtures__';

describe('product component', () => {
  it('should render correctly', () => {
    const { container } = render(<Product {...product} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
