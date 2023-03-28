import React, { Component } from 'react';
import '../css/iot.css'
class Iot extends Component{
    render(){
    return(
        <div className="iframe-container">
            <iframe
          src="http://proyecto.heladoshuastecos.com/proyecto/tortuguero"
          width="auto" height="auto" allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className='w-100 p-2' scrolling="no"></iframe>
        </div>
    )      
  }
}

export default Iot;