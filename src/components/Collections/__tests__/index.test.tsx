import { render } from '@testing-library/react';
import React from 'react';
import Collections from '..';
import collections from '../__fixtures__';

describe('collections component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Collections {...collections} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
