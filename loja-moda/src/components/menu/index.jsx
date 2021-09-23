/* eslint-disable prettier/prettier */
import React from 'react';
import Home from '../../img/home.svg';
import Man from '../../img/men.svg';
import Woman from '../../img/woman.svg';
import Child from '../../img/children.svg';
import {
  Container,
  Title,
  Img,
  ContainerBody,
  ContainerIcons,
  ContainerText,
  ContainerSection,
} from './styles';

export function Menu() {
  return (
    <Container>
      <ContainerBody>
        <ContainerSection>
          <ContainerIcons>
            <Img src={Home} />
          </ContainerIcons>
          <ContainerText>
            <Title>Home</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <ContainerIcons>
            <Img src={Man} />
          </ContainerIcons>
          <ContainerText>
            <Title>Masculina</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <ContainerIcons>
            <Img src={Woman} />
          </ContainerIcons>
          <ContainerText>
            <Title>Feminina</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <ContainerIcons>
            <Img src={Child} />
          </ContainerIcons>
          <ContainerText>
            <Title>Infantil</Title>
          </ContainerText>
        </ContainerSection>
      </ContainerBody>
    </Container>
  );
}
