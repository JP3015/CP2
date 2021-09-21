import React,{Fragment} from "react"
import {Home} from './pages/Home/index'
import GlobalStyle from "./GlobalStyle"

export default function App() {
  return(
    <Fragment>
      <GlobalStyle/>
      <Home />
    </Fragment>
  )
}