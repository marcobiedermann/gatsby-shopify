import { render } from '@testing-library/react';
import React from 'react';
import Label from '..';

describe('label component', () => {
  it('should render correctly', () => {
    const { container } = render(<Label>Label</Label>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
