import { render } from '@testing-library/react';
import React from 'react';
import CollectionPreview from '..';
import collectionPreview from '../__fixtures__';

describe('collection preview component', () => {
  it('should render correctly', () => {
    const { container } = render(<CollectionPreview {...collectionPreview} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
