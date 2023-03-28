import React from 'react'
import Footer from '../componentes/footerr'
import Navbar2 from '../componentes/navbar2'
import Ventas from '../componentes/ventas'

export default function ventas() {
  return (
    <div>
      <Navbar2/>
     
      <div className='p-5'>
        <div className='pt-5 bt-5 position-relatives pb-5'>
        <Ventas/>
        </div>
      </div >
      <Footer/>
    </div>
  )
}
