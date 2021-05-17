import { render } from '@testing-library/react';
import React from 'react';
import Navigation from '..';
import navigation from '../__fixtures__';

describe('navigation component', () => {
  it('should render correctly', () => {
    const { container } = render(<Navigation {...navigation} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
