import React from 'react'
import Foto1 from '../img/Mft1.jpg'
import Foto2 from '../img/Mft2.jpg'
import Foto3 from '../img/Mft3.jpg'

export default function ModaMasculina() {
    return(

        <section>
            <div>
                <h1>Moda Masculina</h1>
            </div>
            <div>
                <h3>Nossa loja possui atualmente em seu estoque 3 itens da moda masculina.</h3>
                <br/>
                <img src={Foto1} alt='calça masculina' width= '200px' height= 'auto' />
                <p>Essa calça de moletom na cor preta está disponível nos tamanhos P , M e G , ela é composta de 100% algodão.</p>
                <br/>
                <img src={Foto2} alt='camisa florida' width= '200px' height= 'auto'/>
                <p>Essa linda camisa florida tem se tornado uma grande tendência em 2021 , sendo a queridinha dos jovens ! Ela é extremamente confortável e está disponível nos tamanhos P , M e G.</p>
                <br/>
                <img src={Foto3} alt='camisa xadrez' width= '200px' height= 'auto'/>
                <p>Essa linda camisa xadrez está sendo considerada como a principal tendencia para o ano de 2022 , com um design discreto e único. Ela está disponível nos tamanhos P , M e G.</p>
            </div>
        </section>

    )
}