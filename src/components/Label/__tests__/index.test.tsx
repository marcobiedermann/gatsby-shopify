import { render } from '@testing-library/react';
import React from 'react';
import Label from '..';

describe('label component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Label>Label</Label>);

    expect(asFragment()).toMatchSnapshot();
  });
});
