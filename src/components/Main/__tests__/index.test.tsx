import { render } from '@testing-library/react';
import React from 'react';
import Main from '..';

describe('main component', () => {
  it('should render correctly', () => {
    const { container } = render(<Main>Main</Main>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
