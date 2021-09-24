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
  ContainerSection,
  ContainerProduct,
  Img,
  ContainerImg,
  ContainerFooter,
  ContainerTitleFooter,
  TitleFooter,
  ContainerDescription,
  DescriptionFooter,
  ContainerValueFooter,
  ValueFooter,
} from './styles';
import { dto_Home } from '../../util/dto';

export function Home() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>Bem vindo</Title>
        </ContainerTitle>
        <ContainerWelcome>
          <Welcome>Boa tarde</Welcome>
        </ContainerWelcome>
        <ContainerDescriptionHeader>
          <DescriptionHeader>Roupas em alta!!</DescriptionHeader>
        </ContainerDescriptionHeader>
      </ContainerHeader>
      <ContainerBody>
        {dto_Home.map((itens) => (
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
