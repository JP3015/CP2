import React from 'react';
import { Menu } from '../menu';
import { Layout } from './styles';
import { Content } from '../content';

// eslint-disable-next-line react/prop-types
export function LayoutComponent({ children }) {
  return (
    <Layout>
      <Menu />
      <Content>{children}</Content>
    </Layout>
  );
}
