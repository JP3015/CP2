import React from 'react'
import Foto1 from '../img/Ift1.jpg'
import Foto2 from '../img/Ift2.jpg'
import Foto3 from '../img/Ift3.jpg'

export default function ModaInfantil() {
    return(

        <section>
        <div>
            <h1>Moda Infantil</h1>
        </div>
        <div>
            <h3>Nossa loja possui atualmente em seu estoque 3 itens da moda Infantil.</h3>
            <br/>
            <img src={Foto1} alt='Calça homem-aranha' width= '200px' height= 'auto' />
            <p>A roupa ideal para o seu filho se achar o verdadeiro Homem-aranha.</p>
            <br/>
            <img src={Foto2} alt='casaco vingadores' width= '200px' height= 'auto'/>
            <p>Esse casaco é o ideal para o seu filho se achar um grande Vingador.</p>
            <br/>
            <img src={Foto3} alt='bone hulk' width= '200px' height= 'auto'/>
            <p>Este boné é o ideal para o seu filho se achar forte como o hulk.</p>
        </div>
    </section>

    )
}