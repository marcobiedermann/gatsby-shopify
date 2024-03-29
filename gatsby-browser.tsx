import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/main.css';

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
