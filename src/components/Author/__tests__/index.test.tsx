import { render } from '@testing-library/react';
import React from 'react';
import Author from '..';
import author from '../__fixtures__';

describe('author component', () => {
  it('should render correctly', () => {
    const { container } = render(<Author {...author} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
