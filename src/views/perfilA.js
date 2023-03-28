import React from 'react'
import Footer from '../componentes/footerr'
import Navbar2 from '../componentes/navbar2'
import UserProfile2 from '../componentes/perfilA'

export default function perfil2() {
  return (
    <div>
      <Navbar2/>
      <div className='p-5'>
        <div className='pt-5 bt-5 position-relatives '>
        <UserProfile2/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}