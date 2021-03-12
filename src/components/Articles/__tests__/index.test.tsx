import { render } from '@testing-library/react';
import React from 'react';
import Articles from '..';
import articles from '../__fixtures__';

describe('articles component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Articles {...articles} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
