import React from 'react'
import Footer from '../componentes/footerr'
import Iot from '../componentes/iot'
import Navbarr from '../componentes/navbar'
import Sliderr from '../componentes/slider'

export default function iot() {
  return (
    <div>
        <Navbarr/>
        <Sliderr/>
        <h1 className='text-center p-2 b-0'>Producto Iot</h1>
        <hr/>
        <div >
        <Iot/>
        </div>
      <div className='pt-5'>
        <Footer/>
      </div>
    </div>
  )
}
