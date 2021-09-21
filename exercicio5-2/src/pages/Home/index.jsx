import React from "react";
import Cabecalho from "../../components/cabecalho";
import { acompanhamentos, sabores } from "../../util/dto";
import {Container, ContainerCabecalho, ContainerSabores, 
  SaboresComponent, ContainerAcompanhamentos,
   AcompanhamentosComponent,ContainerSection,ContainerSaboresDiversos,ContainerAcompanhemntosDiversos} from "../Home/styles"



export function Home() {
   return(
     <Container> 
        <ContainerCabecalho>
        <Cabecalho customColor="#3434" title="Sorveteria FIAP" subtitle="pera" />
        </ContainerCabecalho>
        <ContainerSection> 
         <ContainerSaboresDiversos> 
           <span> Sabores </span> 
        {sabores.map(sabores =>
           <ContainerSabores key={sabores.id} >
              <SaboresComponent >
                    {sabores.sabor}
              </SaboresComponent> 
            </ContainerSabores>
          
          )} 
         </ContainerSaboresDiversos> 
         <ContainerAcompanhemntosDiversos> 
           <span> Acompanhamentos </span>
        {acompanhamentos.map(acompanhamentos => 
        <ContainerAcompanhamentos key={acompanhamentos.id} >
            <AcompanhamentosComponent>
                {acompanhamentos.sabor}
            </AcompanhamentosComponent>   
        </ContainerAcompanhamentos>
        
        )}
        </ContainerAcompanhemntosDiversos>
        </ContainerSection>     
     </Container>
   )
}