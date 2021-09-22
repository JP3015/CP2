import React from "react";
import {
  Container,
  ContainerTitle,
  TitleSection,
  ColorTitle,
  SubtitleSection,
} from "./styles";

export default function Cabecalho({
  title,
  letterTitle,
  subtitle,
  customColor,
}) {
  return (
    <Container>
      <ContainerTitle>
        <TitleSection customColor={customColor}>{title} </TitleSection>
        <ColorTitle> {letterTitle}</ColorTitle>
      </ContainerTitle>
      <SubtitleSection>{subtitle}</SubtitleSection>
    </Container>
  );
}
