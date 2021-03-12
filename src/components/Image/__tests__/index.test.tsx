import { render } from '@testing-library/react';
import React from 'react';
import Image from '..';

describe('image component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Image />);

    expect(asFragment()).toMatchSnapshot();
  });
});
