import { render } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button>Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
