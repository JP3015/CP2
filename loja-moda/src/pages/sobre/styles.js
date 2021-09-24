import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
`;

export const ContainerTitle = styled.div``;

export const Title = styled.h2`
  line-height: 25px;
  font-size: 35px;
  color: ${colors.textColor};
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const ContainerDescription = styled.div``;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const ContainerSuTitle = styled.div``;

export const SubTitle = styled.span`
  line-height: 20px;
  font-size: 14px;
  color: ${colors.textColor};
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: 13px;
    line-height: 15px;
  }
`;

export const ContainerBody = styled.section`
  display: flex;
  margin: 10px 0px;
  justify-content: row;
  flex-wrap: wrap;
`;
