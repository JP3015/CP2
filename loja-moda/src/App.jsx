import React, { Fragment } from 'react';
import { Routes } from './routes';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  );
}
