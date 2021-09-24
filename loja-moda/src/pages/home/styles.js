import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90%;
  @media (max-width: 700px) {
    padding: 10px 0px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 145px;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 700px) {
    height: 200px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  line-height: 25px;
  font-size: 35px;
  color: ${colors.textColor};
  font-weight: 500;
  @media (max-width: 700px) {
    line-height: 15px;
    font-size: 25px;
  }
`;

export const ContainerWelcome = styled.div``;

export const Welcome = styled.h3`
  line-height: 15px;
  font-size: 25px;
  color: ${colors.textColor};
  font-weight: 400;
  @media (max-width: 700px) {
    line-height: 15px;
    font-size: 18px;
  }
`;

export const ContainerDescriptionHeader = styled.div``;

export const DescriptionHeader = styled.span`
  color: ${colors.textColor};
  font-weight: 400;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

