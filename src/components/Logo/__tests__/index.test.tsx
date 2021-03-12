import { render } from '@testing-library/react';
import React from 'react';
import Logo from '..';

describe('logo component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Logo>Logo</Logo>);

    expect(asFragment()).toMatchSnapshot();
  });
});
