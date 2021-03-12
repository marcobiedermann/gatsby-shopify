import { render } from '@testing-library/react';
import React from 'react';
import Article from '..';
import article from '../__fixtures__';

describe('article component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Article {...article} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
