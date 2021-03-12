import { render } from '@testing-library/react';
import React from 'react';
import Breadcrumb from '..';
import breadcrumb from '../__fixtures__';

describe('breadcrumb component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Breadcrumb {...breadcrumb} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
