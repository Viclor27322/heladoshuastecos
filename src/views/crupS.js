import React from 'react'
import Footer from '../componentes/footerr'
import Navbar2 from '../componentes/navbar2'
import ShowUsers from '../componentes/showUsers'

export default function crupS() {
  return (
    <div>
      <Navbar2/>
      <div className='pt-4'>
        <div className='p-5'>
            <ShowUsers/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
