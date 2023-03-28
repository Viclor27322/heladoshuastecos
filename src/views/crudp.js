import React from 'react'
import Footer from '../componentes/footerr'
import Navbar2 from '../componentes/navbar2'
import ShowProductos from '../componentes/ShowProductos'

export default function crudp() {
  return (
    <div>
      <Navbar2/>
      <div className='pt-4'>
        <div className='p-5'>
            <ShowProductos/>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
