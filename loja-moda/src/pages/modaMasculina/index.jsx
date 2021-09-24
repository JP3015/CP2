/* eslint-disable prettier/prettier */
import React from 'react';
import { Masculine } from '../../util/dto';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerSection,
  ContainerBody,
  ContainerProduct,
  ContainerImg,
  Img,
  ContainerFooter,
  ContainerTitleFooter,
  TitleFooter,
  ContainerDescription,
  DescriptionFooter,
  ContainerValueFooter,
  ValueFooter,
} from './styles';

export function ModaMen() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Moda Masculina</Title>
      </ContainerTitle>
      <ContainerBody>
        {Masculine.map((itens) => (
          <ContainerSection key={itens.id}>
            <ContainerProduct>
              <ContainerImg>
                <Img src={itens.imagem} />
              </ContainerImg>
              <ContainerFooter>
                <ContainerTitleFooter>
                  <TitleFooter>{itens.title}</TitleFooter>
                </ContainerTitleFooter>
                <ContainerDescription>
                  <DescriptionFooter>{itens.describe}</DescriptionFooter>
                </ContainerDescription>
                <ContainerValueFooter>
                  <ValueFooter>{itens.value}</ValueFooter>
                </ContainerValueFooter>
              </ContainerFooter>
            </ContainerProduct>
          </ContainerSection>
        ))}
      </ContainerBody>
    </Container>
  );
}
