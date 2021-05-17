import { render } from '@testing-library/react';
import React from 'react';
import Logo from '..';

describe('logo component', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo>Logo</Logo>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
