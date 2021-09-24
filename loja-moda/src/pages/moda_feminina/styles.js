import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const ContainerTitle = styled.div``;

export const Title = styled.h2`
  line-height: 50px;
  font-size: 45px;
  font-family: 'Caramel', cursive;
  color: ${colors.pink};
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

