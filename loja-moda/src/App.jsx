/* eslint-disable prettier/prettier */
import React from 'react';
import { Home } from './pages/home';
import { LayoutComponent } from '../src/components/layout';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <LayoutComponent>
      <GlobalStyles />
      <Home />
    </LayoutComponent>
  );
}
