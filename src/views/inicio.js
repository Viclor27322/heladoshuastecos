import React, { Component } from 'react';
import Footer from '../componentes/footerr';
import Navbarr from '../componentes/navbar';
import Prod from '../componentes/previewP';
import Sliderr from '../componentes/slider';
import Ubi from '../componentes/ubicacion';

class Home extends Component{
    render(){
    return(
        <div id='home'>
            <div>
                <Navbarr/>
            </div>
            <div>
                <Sliderr/>
                <Prod/>
                <Ubi/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Home;