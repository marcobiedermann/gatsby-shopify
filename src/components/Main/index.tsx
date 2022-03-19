import React, { ReactNode } from 'react';
import { main } from './style.module.css';

export interface MainProps {
  children: ReactNode;
}

function Main(props: MainProps) {
  return <main className={main} {...props} />;
}

export default Main;
