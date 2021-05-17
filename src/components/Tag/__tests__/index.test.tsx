import { render } from '@testing-library/react';
import React from 'react';
import Tag from '..';

describe('tag component', () => {
  it('should render correctly', () => {
    const { container } = render(<Tag>tag</Tag>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
