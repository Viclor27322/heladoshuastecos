import React from 'react'
import Sliderr from '../componentes/slider'
import Buscar from '../componentes/buscar'
import Footer from '../componentes/footerr'
import Navbarr from '../componentes/navbar'

export default function buscar() {
  return (
    <div>
      <Navbarr/>
      <Sliderr/>
      <Buscar/>
      <Footer/>
    </div>
  )
}
