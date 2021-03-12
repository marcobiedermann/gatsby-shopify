import { render } from '@testing-library/react';
import React from 'react';
import Collection from '..';
import collection from '../__fixtures__';

describe('collection component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Collection {...collection} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
