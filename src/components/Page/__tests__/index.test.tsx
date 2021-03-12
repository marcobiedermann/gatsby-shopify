import { render } from '@testing-library/react';
import React from 'react';
import Page from '..';
import page from '../__fixtures__';

describe('page component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Page {...page} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
