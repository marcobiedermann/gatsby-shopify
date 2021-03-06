import { render } from '@testing-library/react';
import React from 'react';
import ProductPreview from '..';
import productPreview from '../__fixtures__';

describe('product preview component', () => {
  it('should render correctly', () => {
    const { container } = render(<ProductPreview {...productPreview} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
