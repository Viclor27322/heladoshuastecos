import React,{useState,useEffect} from 'react';
import '../css/terminos.css'
import axios from 'axios';

function Ayuda() {
  const url = 'https://node-v-lyart.vercel.app/api/ayuda';
    const [ayuda,setAyuda] = useState([]);
    useEffect(()=>{
        getAyuda();
    },[]);

    const getAyuda =async()=>{
        const respuest = await axios.get(url);
        setAyuda(respuest.data);   
    }

  return (
    <div>
      <main id="main-conteiner2">
    <h1>Ayuda</h1>
    <hr/>
    {
      ayuda.map((ayudas)=>(
        <div key={ayudas._id}>
          <h4>{ayudas.titulo}</h4>
          <p>{ayudas.descripcion}</p>
        </div>
      ))
    }

</main> 
    </div>
  )
}

export default Ayuda
