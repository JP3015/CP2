import React from "react"
import Cabelho from "./components/cabecalho/cabecalho"
import Corpo from "./components/corpo/corpo"
import Rodape from "./components/rodape/rodape"


export default function App() {
  return(
    <div className='container'>
        <Cabelho/>
        <Corpo/>
        <Rodape/>
    </div>
  )
}