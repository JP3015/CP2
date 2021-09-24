import React from 'react';
import { Masculine } from '../../util/dto';
import { Card } from '../../components/card';
import { Rodape } from '../../components/rodape';
import { Container, ContainerTitle, Title, ContainerBody, ContainerRodape } from './styles';

export function ModaMen() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Moda Masculina</Title>
      </ContainerTitle>
      <ContainerBody>
        {Masculine.map((itens) => (
          <Card
            key={itens.id}
            id={itens.id}
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
