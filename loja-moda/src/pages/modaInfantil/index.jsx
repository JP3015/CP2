import React from 'react';
import { Container, ContainerTitle, Title, ContainerBody, ContainerRodape } from './styles';
import { Child } from '../../util/dto';
import { Card } from '../../components/card';
import { Rodape } from "../../components/rodape"

export function ModaChild() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Moda Infantil</Title>
      </ContainerTitle>
      <ContainerBody>
        {Child.map((itens) => (
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
