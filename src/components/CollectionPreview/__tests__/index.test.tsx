import { render } from '@testing-library/react';
import React from 'react';
import CollectionPreview from '..';
import collectionPreview from '../__fixtures__';

describe('collection preview component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CollectionPreview {...collectionPreview} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
