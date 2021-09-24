/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={'/'}>
            <ContainerIcons>
              <Img src={Home} />
            </ContainerIcons>
          </Link>
          <ContainerText>
            <Title>Home</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <Link to={'/masculino'}>
            <ContainerIcons>
              <Img src={Man} />
            </ContainerIcons>
          </Link>
          <ContainerText>
            <Title>Moda Masculina</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <ContainerIcons>
            <Link to={'/feminina'}>
              <Img src={Woman} />
            </Link>
          </ContainerIcons>
          <ContainerText>
            <Title>Moda Feminina</Title>
          </ContainerText>
        </ContainerSection>
        <ContainerSection>
          <Link to={'/crianca'}>
            <ContainerIcons>
              <Img src={Child} />
            </ContainerIcons>
          </Link>
          <ContainerText>
            <Title>Moda Infantil</Title>
          </ContainerText>
        </ContainerSection>
      </ContainerBody>
    </Container>
  );
}
