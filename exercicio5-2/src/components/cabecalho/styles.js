import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TitleSection = styled.h1`
  font-size: 45px;
  line-height: 52px;
  color: #ffa500;
  margin-left: 2px;
  @media (max-width: 700px) {
    font-size: 22.5px;
    line-height: 25px;
  }
`;

export const ColorTitle = styled(TitleSection)`
  color: blueviolet;
`;

export const SubtitleSection = styled.h2`
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 10px;
    line-height: 14px;
  }
`;
