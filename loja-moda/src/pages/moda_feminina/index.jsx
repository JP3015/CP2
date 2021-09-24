import React from 'react';
import { Container, ContainerTitle, Title, ContainerBody, ContainerRodape } from './styles';
import { Feminine } from '../../util/dto';
import { Card } from '../../components/card';
import { Rodape } from "../../components/rodape"

export function ModaFemale() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Moda Feminina</Title>
      </ContainerTitle>
      <ContainerBody>
        {Feminine.map((itens) => (
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
