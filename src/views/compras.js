import React from 'react'
import Compras from '../componentes/compras'
import Footer from '../componentes/footerr'
import Navbarr from '../componentes/navbar'

export default function compras() {
  return (
    <div>
      <Navbarr/>
      <div className='pt-5'>
        <div className='p-5'>
            <Compras/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
