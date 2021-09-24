import React from 'react';
import {
  Container,
  ContainerHeader,
  ContainerTitle,
  Title,
  ContainerDescription,
  Description,
  ContainerSuTitle,
  SubTitle,
  ContainerBody,
  ContainerRodape,
} from './styles';
import { Card } from '../../components/card';
import { dto_Sobre } from '../../util/dto';
import { Rodape } from "../../components/rodape"

export function Sobre() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>Go code Fiap</Title>
        </ContainerTitle>
        <ContainerDescription>
          <Description>
            Nossa loja possui atendimento bem avaliado e roupas de qualidade com
            um preço acessível. Nossos integrantes são totalmente capacitados e
            profissionais, apreciamos muito o trabalho que fazem.
          </Description>
        </ContainerDescription>
        <ContainerSuTitle>
          <SubTitle>Nossos integrantes!!</SubTitle>
        </ContainerSuTitle>
      </ContainerHeader>
      <ContainerBody>
        {dto_Sobre.map((itens) => (
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
