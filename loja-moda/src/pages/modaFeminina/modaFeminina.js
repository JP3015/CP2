import React from 'react'
import Foto1 from '../img/Fft1.jpg'
import Foto2 from '../img/Fft2.jpg'
import Foto3 from '../img/Fft3.jpg'


export default function Modafeminina() {
    return(

        <section>
            <div>
                <h1>Moda Feminina</h1>
            </div>
            <div>
                <h3>Nossa loja possui atualmente em seu estoque 3 itens da moda feminina.</h3>
                <br/>
                <img src={Foto1} alt='Saia' width= '200px' height= 'auto' />
                <p>Esse lindo modelo de saia acaba de chegar ao brasil , vindo diretamente da cultura japonesa. Uma ótima opção para usar no dia a dia , pois ela é extremamente confortável e estilosa.</p>
                <br/>
                <img src={Foto2} alt='calça xadrez vermelha feminina' width= '200px' height= 'auto'/>
                <p>Esta calça é a ideal para os dias de inverno pois é extremamente confortável e de ótima qualidade...Como todos os nossos produtos.</p>
                <br/>
                <img src={Foto3} alt='Vestido florido ' width= '200px' height= 'auto'/>
                <p>Este vestido é o preferido das garotas que passam muito tempo na praia , pois ele é extremamente elegante  e confortável , ideal para belíssimas fotos na praia.</p>
            </div>
        </section>

    )
}