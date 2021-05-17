import { render } from '@testing-library/react';
import React from 'react';
import Comment from '..';
import comment from '../__fixtures__';

describe('comment component', () => {
  it('should render correctly', () => {
    const { container } = render(<Comment {...comment} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
