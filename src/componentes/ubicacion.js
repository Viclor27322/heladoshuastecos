import React, { Component } from 'react';
class Ubi extends Component{
    render(){
    return(
        <div>
            <h1 className='text-center p-2 b-0'>Ubicacion </h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10525.27950688235!2d-98.41919793131757!3d21.142516385441695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x542fa852c22dba8e!2sCatedral%20de%20Huejutla%20(Cristo%20Rey)!5e0!3m2!1ses!2smx!4v1656193379797!5m2!1ses!2smx"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className='w-100 p-2'></iframe>
        </div>
    )      
  }
}

export default Ubi;