import { render } from '@testing-library/react';
import React from 'react';
import { Layout } from '..';

describe('layout component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Layout
        shopifyShop={{
          name: 'ShopifyShop',
        }}
      >
        Content
      </Layout>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
