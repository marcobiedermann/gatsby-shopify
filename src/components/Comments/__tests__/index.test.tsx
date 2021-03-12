import { render } from '@testing-library/react';
import React from 'react';
import Comments from '..';
import comments from '../__fixtures__';

describe('comments component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Comments {...comments} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
