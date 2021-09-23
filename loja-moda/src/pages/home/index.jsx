/* eslint-disable prettier/prettier */
import React from 'react';
import Fft1 from '../../img/Fft1.jpg';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerSection,
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

export function Home() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Moda Feminina</Title>
      </ContainerTitle>
      <ContainerSection>
        <ContainerProduct>
          <ContainerImg>
            <Img src={Fft1} />
          </ContainerImg>
          <ContainerFooter>
            <ContainerTitleFooter>
              <TitleFooter> Blusa trico </TitleFooter>
            </ContainerTitleFooter>
            <ContainerDescription>
              <DescriptionFooter>
                Saia feita com recursos renovaveis, pensando no bem-estar do
                meio ambiente Blusa feito de algodao,com ceda
              </DescriptionFooter>
            </ContainerDescription>
            <ContainerValueFooter>
              <ValueFooter>R$ 20,00</ValueFooter>
            </ContainerValueFooter>
          </ContainerFooter>
        </ContainerProduct>
      </ContainerSection>
    </Container>
  );
}
