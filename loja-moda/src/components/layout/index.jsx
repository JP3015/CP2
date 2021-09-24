import React from 'react';
import { Menu } from '../menu';
import { Layout } from './styles';
import { Content } from '../content';
import { Rodape } from '../rodape';

export function LayoutComponent({ children }) {
  return (
    <Layout>
      <Menu />
      <Content>{children}</Content>
      <Rodape/>
    </Layout>
  );
}
