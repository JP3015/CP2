/* eslint-disable prettier/prettier */
import React from 'react';
// import { ModaFemale } from './pages/moda_feminina';
// import { ModaChild } from './pages/modaInfantil';
import { ModaMen } from './pages/modaMasculina';
import { LayoutComponent } from '../src/components/layout';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <LayoutComponent>
      <GlobalStyles />
      <ModaMen />
    </LayoutComponent>
  );
}
