import React from 'react'
import Footer from '../componentes/footerr'
import Navbarr from '../componentes/navbar'
import UserProfile from '../componentes/perfil'
import Sliderr from '../componentes/slider'

export default function perfil() {
  return (
    <div>
      <Navbarr/>
      <div className='p-5'>
        <div className='pt-5 bt-5 position-relatives '>
        <UserProfile/>
        </div>
      </div>
        
        

      <Footer/>
    </div>
  )
}
