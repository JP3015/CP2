import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 20px;
  background-image: url("https://image.freepik.com/vetores-gratis/vetor-de-logotipo-de-sorvete_25327-117.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContainerCabecalho = styled.div``;

export const ContainerSabores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapSabores = styled.div`
  display: flex;
  padding: 5px 7px;
  align-items: center;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  background-color: #fff;
  border: 5px solid #808080;
  border-radius: 15px;
`;

export const WrapAcompanhamentos = styled(WrapSabores)``;

export const ContainerTitle = styled.div``;

export const AcompanhamentosComponent = styled.h2`
  font-size: 25px;
  line-height: 30px;
  color: blueviolet;
  margin-bottom: 2px;
`;

export const ContainerAcompanhamentos = styled(ContainerSabores)``;

export const SaboresComponent = styled(AcompanhamentosComponent)``;

export const ContainerRodape = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TituloSabores = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 31px;
  line-height: 35px;
  color: #964b00;
`;

export const TituloAcompanhamentos = styled(TituloSabores)``;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 300px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerSaboresDiversos = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAcompanhementosDiversos = styled(ContainerSaboresDiversos)``;
