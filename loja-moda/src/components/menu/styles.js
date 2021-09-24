import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.aside`
  display: flex;
  grid-area: AS;
  background-color: ${colors.primary};
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBody = styled.div`
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0px;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerIcons = styled.div`
  justify-content: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export const ContainerText = styled.div``;

export const Title = styled.span`
  font-size: 15px;
  line-height: 17px;
  font-weight: 400;
  color: ${colors.textColor};
`;
