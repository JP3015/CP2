import React from 'react';
import {
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

// eslint-disable-next-line react/prop-types
export const Card = ({ imagem, title, describe, value }) => (
  <ContainerSection>
    <ContainerProduct>
      <ContainerImg>
        <Img src={imagem} />
      </ContainerImg>
      <ContainerFooter>
        <ContainerTitleFooter>
          <TitleFooter>{title}</TitleFooter>
        </ContainerTitleFooter>
        <ContainerDescription>
          <DescriptionFooter>{describe}</DescriptionFooter>
        </ContainerDescription>
        <ContainerValueFooter>
          <ValueFooter>{value}</ValueFooter>
        </ContainerValueFooter>
      </ContainerFooter>
    </ContainerProduct>
  </ContainerSection>
);
