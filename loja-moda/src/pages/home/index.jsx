import React from 'react';
import {
  Container,
  ContainerHeader,
  ContainerTitle,
  Title,
  ContainerWelcome,
  Welcome,
  ContainerDescriptionHeader,
  DescriptionHeader,
  ContainerBody,
  ContainerRodape,
} from './styles';
import { Rodape } from '../../components/rodape';
import { dto_Home } from '../../util/dto';
import { Card } from '../../components/card';

export function Home() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>Bem vindo</Title>
        </ContainerTitle>
        <ContainerWelcome>
          <Welcome>Roupas para todos os estilos</Welcome>
        </ContainerWelcome>
        <ContainerDescriptionHeader>
          <DescriptionHeader>Roupas em alta!!</DescriptionHeader>
        </ContainerDescriptionHeader>
      </ContainerHeader>
      <ContainerBody>
        {dto_Home.map((itens) => (
          <Card
            key={itens.id}
            imagem={itens.imagem}
            describe={itens.describe}
            value={itens.value}
            title={itens.title}
          />
        ))}
      </ContainerBody>
    </Container>
  );
}
