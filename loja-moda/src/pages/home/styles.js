import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 145px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  line-height: 25px;
  font-size: 35px;
  color: ${colors.textColor};
`;

export const ContainerWelcome = styled.div``;

export const Welcome = styled.h3`
  line-height: 15px;
  font-size: 25px;
  color: ${colors.textColor};
`;

export const ContainerDescriptionHeader = styled.div``;

export const DescriptionHeader = styled.span`
  color: ${colors.textColor};
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

export const ContainerSection = styled.section``;

export const ContainerProduct = styled.div`
  display: flex;
  margin: 10px 35px;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  padding: 20px 5px;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px 20px 10px -5px rgba(00, 00, 00, 0.5);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerImg = styled.div``;

export const Img = styled.img`
  width: 175px;
  height: 175px;
`;

export const ContainerFooter = styled.div``;

export const ContainerTitleFooter = styled.div``;

export const TitleFooter = styled.h3`
line-height: 30px;
font-weight: 500,
font-size: 21px;
`;

export const ContainerDescription = styled.div`
  font-weight: 400;
  font-size: 11.5px;
  line-height: 17px;
`;

export const DescriptionFooter = styled.p``;

export const ContainerValueFooter = styled.div``;

export const ValueFooter = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
`;
