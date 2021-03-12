import { render } from '@testing-library/react';
import React from 'react';
import Grid from '..';

describe('grid component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Grid>Grid</Grid>);

    expect(asFragment()).toMatchSnapshot();
  });
});
