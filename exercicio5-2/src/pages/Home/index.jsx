import React from "react";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape"
import { acompanhamentos, sabores } from "../../util/dto";
import {Container, 
   ContainerCabecalho, 
   ContainerSabores, 
   SaboresComponent, 
   ContainerAcompanhamentos,
   AcompanhamentosComponent,
   ContainerSection,
   ContainerSaboresDiversos,
   WrapSabores,
   ContainerTitle,
   WrapAcompanhamentos,
   ContainerAcompanhementosDiversos,
   ContainerRodape,
   TituloSabores,
   TituloAcompanhamentos,

} from "../Home/styles"



export function Home() {
   return(
      <Container> 
         <ContainerCabecalho>
            <Cabecalho title="Sorveteria" letterTitle="FIAP" subtitle="Aqui vendemos sorvetes de diversos sabores e de alta qualidade!" />
         </ContainerCabecalho>
         <ContainerSection> 
         <WrapSabores> 
            <ContainerTitle>
         <TituloSabores> Sabores </TituloSabores> 
         </ContainerTitle>
            <ContainerSaboresDiversos> 
         {sabores.map(sabores =>
            <ContainerSabores key={sabores.id} >
               <SaboresComponent >
                  {sabores.sabor}
               </SaboresComponent> 
            </ContainerSabores>
          
         )} 
            </ContainerSaboresDiversos> 
         </WrapSabores>  
         <WrapAcompanhamentos> 
            <TituloAcompanhamentos> Acompanhamentos </TituloAcompanhamentos>
         <ContainerAcompanhementosDiversos> 
         {acompanhamentos.map(acompanhamentos => 
         <ContainerAcompanhamentos key={acompanhamentos.id} >
            <AcompanhamentosComponent>
               {acompanhamentos.sabor}
            </AcompanhamentosComponent>   
         </ContainerAcompanhamentos>
         )}
         </ContainerAcompanhementosDiversos>
         </WrapAcompanhamentos>   
         </ContainerSection>
         <ContainerRodape>
            <Rodape rodape="O uso deste site está sujeito aos termos e condições do Termo de Uso e Política de privacidade.
            © FIAP. Todos os direitos reservados."/>
         </ContainerRodape>     
      </Container>
   )
}