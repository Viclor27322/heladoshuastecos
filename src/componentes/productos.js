import React ,{useEffect,useState,useContext } from 'react'
import axios from 'axios';
import { show_alerta } from '../funtions';
import { AuthContext } from '../Auth/AuthProvider';

export default function Productoss() {
    const urll = 'https://node-v-lyart.vercel.app/api/productos';
    const [prod,setProducts] = useState([]);
    const [id,setId]= useState('');
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion]=useState('');
    const [precio,setPrecio]=useState('');
    const [sabor,setSabor] = useState('');
    const [presentacion,setPresentacion]=useState('');
    const [existencia,setExistencia]=useState(0);
    const [categoria,setCategoria] = useState('');
    const [imagen,setImagen]=useState();
    const [cantidad,setCantidad]=useState(0);
    const [title,setTitle]=useState('');
    const { isAuthenticated,user } = useContext(AuthContext);
    
   
    useEffect(() => {
      getProducts();
    }, []);

    const getProducts =async()=>{
        const respuest = await axios.get(urll);
        setProducts(respuest.data);   
        console.log(prod)
    }
    const openModal = (id,nombre,descripcion,precio,sabor,presentacion,existencia,categoria,imagen)=>{
      setTitle('Comprar Producto');
      setId(id);
      setNombre(nombre);
      setDescripcion(descripcion);
      setPrecio(precio);
      setSabor(sabor);
      setPresentacion(presentacion);
      setExistencia(existencia);
      setCategoria(categoria);
      setImagen(imagen);
      window.setTimeout(function(){
          document.getElementById('nombre').focus();
      },500);
  }
  const comprar=()=>{
    if(user){
        if(existencia===0){
        show_alerta('Lo sentimos producto agotado','warning');
      }else{
        if(cantidad>existencia){
        show_alerta('Cantidad no disponible','warning');
        }else{
            axios({method:'POST',url:'https://api-rest-equi.vercel.app/api/ventas',data:{
              usuario:user._id,
              productos:id,
              cantidad:cantidad,
              total:cantidad*precio
            }})
            .then(function(respuesta){
              console.log(respuesta);
              axios({method:'PUT',url:urll+"/"+id,data:{
                existencia:existencia-cantidad
              }}) 
              getProducts();
              show_alerta('Se realizo la venta correctamente','success');
              document.getElementById('btncerrar').click();  
             
            }).catch(function(error){
                show_alerta('Error en la solicitud','error');
                console.log(error);
            })   
        }
    }
    }else{
      show_alerta('No puede realizar la compra registrese','warning');
    }
  }

  return (
    <div>

    
    <div>
        <h1 className="text-center">Cuéntanos que sabores te gustan</h1>
  <hr/>

  <section id="galeria" className="container  ">

    <div className="row  justify-content-lg-center align-items-center">
      {prod.map((producto)=>(
        <div className="col-lg-3" key={producto._id}>
        <img src={producto.imagen} alt=""/>
        <section className="description" >
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h4>Precio : {producto.precio}</h4>
          <label>Existencia: </label>
          <span className="myRange">
            
            <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={producto.existencia} />
          </span>
          <br/>
          <button onClick={()=> openModal(producto._id,producto.nombre,producto.descripcion,producto.precio,producto.sabor,producto.presentacion,producto.existencia,producto.categoria,producto.imagen)} 
          data-bs-toggle='modal' data-bs-target='#modalProducts' className='btn' id='btn-Agregar'>Ver mas...</button> 
         </section>
      </div>
      )
        
      )}
    </div>
  </section>
    </div>
    <div id='modalProducts' className='modal fade'>
          <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <label className='h5'>{title}</label>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                <div className="">
                    <input type='hidden' id='id' ></input>
                      <img src={imagen} width='100%' height='150px'/>
                      <section className="description" >
                      <h2 id='nombre' >{nombre}</h2>
                      <p>{descripcion}</p>  
                      <p>Precio : {precio} </p>
                      <p>Sabor: {sabor}</p>
                      <p>Presentacion: {presentacion}</p>
                      <label>Existencia: </label>
                      <span className="myRange">      
                            <input type="number" id="no2" min="0" tab-index="2" placeholder="0" value={existencia} />
                      </span>
                      <hr/>
                    <label>Cantidad :</label>
                    <input type="number" id="no2" min="0" tab-index="2" placeholder="0" onChange={(e)=> setCantidad(e.target.value)} />
                        </section>
                    
                    </div>
                    <div className='d-grid col-6 mx-auto'>
                        <button  className='btn btn-success' onClick={()=>comprar()}>
                            <i className='fa-solid fa-floppy-disk'></i>Comprar
                        </button>
                    </div>
                </div>
                <div className='modal-footer'>
                    <button id='btncerrar' type='buttton' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                </div>
            </div>
        </div>
      </div>
   </div> 
  )
}
