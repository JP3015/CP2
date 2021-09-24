import React from 'react'
import {Container, RodapeSection} from "./styled"

export default function Rodape({rodape}) {
    return(
    <Container>
        <RodapeSection>{rodape}</RodapeSection>
    </Container>
    )
}