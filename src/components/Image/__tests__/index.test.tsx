import { render } from '@testing-library/react';
import React from 'react';
import Image from '..';
import image from '../__fixtures__';

describe('image component', () => {
  it('should render correctly', () => {
    const { container } = render(<Image {...image} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
