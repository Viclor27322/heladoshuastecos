import React, { Component } from 'react';
import Footer from '../componentes/footerr';
import Navbarr from '../componentes/navbar';
import Productoss from '../componentes/productos';
import Sliderr from '../componentes/slider';
import '../css/productos.css';

class Productos extends Component{
    render(){
    return(
        <div id='productos'>
            <div>
                <Navbarr/>
            </div>
            <div>
                <Sliderr/>
                <Productoss/>
            </div>
            <div>
               <Footer/>
            </div>
        </div>
    )      
  }
}

export default Productos;