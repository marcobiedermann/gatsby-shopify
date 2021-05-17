import { render } from '@testing-library/react';
import React from 'react';
import Footer from '..';

describe('footer component', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer>Footer</Footer>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
