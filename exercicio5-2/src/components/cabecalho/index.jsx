import React from 'react'
import {Container,TitleSection,SubtitleSection} from "./styles"

export default function Cabecalho({title,subtitle,customColor}) {
    return(
        <Container>
            <TitleSection customColor={customColor}>{title}</TitleSection>
            <SubtitleSection>{subtitle}</SubtitleSection>        
        </Container>    

    )
}