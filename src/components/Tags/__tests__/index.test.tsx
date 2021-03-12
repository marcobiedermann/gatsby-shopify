import { render } from '@testing-library/react';
import React from 'react';
import Tags from '..';
import tags from '../__fixtures__';

describe('tags component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tags {...tags} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
