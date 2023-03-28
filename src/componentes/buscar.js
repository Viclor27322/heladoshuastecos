import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mango from '../img/hela2.jpg';
import '../css/productos.css';

export default function Buscar() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const obtenerProductos = async () => {
    try {
      const response = await axios.get(
        "https://node-v-lyart.vercel.app/api/productos/"
      );
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const buscarProducto = () => {
    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className="text-center">Busqueda de Productos</h1>
      <div className='d-flex justify-content-center p-2'>
        <div>
           <input placeholder="Nombre del producto" className='form-control mb-3 fs-5' onChange={(e)=>setBusqueda(e.target.value)} value={busqueda}></input>
        </div>
      </div>
       
      <hr/>
      <section id="galeria" className="container  ">
        <div className="row  justify-content-lg-center align-items-center">
          {busqueda.length > 0 && buscarProducto().map((productoss) => (
            <div className="col-lg-3" key={productoss._id}>
              <img src={productoss.imagen} alt=""/>
              <section className="description" >
                <h2>{productoss.nombre}</h2>
                <p>{productoss.descripcion}</p>
                <h4>Precio : {productoss.precio}</h4>
                <label>Existencia: </label>
                <span className="myRange">
                  <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={productoss.existencia} />
                </span>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
