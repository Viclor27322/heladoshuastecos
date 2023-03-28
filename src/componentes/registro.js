import React,{useState} from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
    const url = 'https://node-v-lyart.vercel.app/api/users';
    const history = useNavigate();
    const [nombre,setNombre]=useState('');
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [pass1,setPass]=useState('');
    const [pass2,setPass2]=useState('');
    const [res,setRes]=useState('');
    const [pregunta,setPregunta] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleRegistro = (e) => {
        e.preventDefault();
        if (pass1 !== pass2) {
          setErrorMessage('Las contraseñas no coinciden');
          return;
        }
          // Validar el correo electrónico
          if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage("Ingresa un correo electrónico válido");
            return;
          }
          if (!/^[a-zA-Z]+$/.test(nombre)) {
            setErrorMessage("El nombre solo debe tener letras");
            return;
          }else{
            fetch(url)
            .then(response => response.json())
            .then(data => {
            const userr = data.find(u => u.correo === email && u.nombreUsers===user);
            if (userr) {
                setErrorMessage('El usuario o correo ya existen');
            } else {
                fetch(url,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        nombre:nombre,
                        nombreUsers:user,
                        contraseña:pass1,
                        correo:email,
                        pregunta:pregunta,
                        clave:res
                    })
                })
                .then(response => response.json())
                .then(data => {
                    history('/login');
                })
                .catch(error => {
                    console.error(error);
                    setErrorMessage('Hubo un error al registrar');
                });
                }
            })
        
        }   
      };
  return (
    <div>
      <main id="main" className="d-flex w-100 background-dack">
     
     <div className="container d-flex flex-column">

         <div className="row vh-50 ">
             <div className="col-sm-10 col-md-6 col-lg-4 mx-auto d-table h-100 mt-5">
                 <div className="d-table-cell align-middle" >
                     <div className="card card-login rounded-7 bg-light bg-gradient mb-5">
                         <div className="card-body">
                             <div className="m-sm-1">
                                 <div className="text-center mb-4">
                                     <h1 className="h2 text-golden fs-3 text-dark">Datos de registro</h1>
                                     <hr/>
                                 </div>
                                 {errorMessage !== '' && (
                                        <label  className='color-red text-center'>{errorMessage}</label>
                                      )}
                                     <form onSubmit={handleRegistro}>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Nombre</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="text" name="inp_usario" required onChange={(e)=>setNombre(e.target.value)}
                                             placeholder="Introduce tu nombre" />
                                     </div>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Usuario</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="text" name="inp_usario" required onChange={(e)=>setUser(e.target.value)}
                                             placeholder="Introduce tu usuario" />
                                     </div>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Correo electrónico</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="email" name="inp_email" onChange={(e)=>setEmail(e.target.value)}
                                             placeholder="Introduce tu correo electrónico"  required/>
                                     </div>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Contraseña</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="text" name="inp_password"
                                             onChange={(e)=>setPass(e.target.value)} pattern="[a-z]{6,10}[A-Z]{1}[0-9]{2}" 
                                             title="Primera 6 letras minusculas, una letra mayuscula y 2 digitos"
                                             placeholder="Crea tu contraseña"  id="pass1" required/>

                                     </div>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Verificar contraseña</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="password" name="inp_verf_password" onChange={(e)=>setPass2(e.target.value)}
                                             placeholder=" Verificar tu contraseña" id="pass2" required/>
                                     </div>
                                     <div className='mb-3'>
                                            <label className="form-label mb-1 text-primary">Pregunta</label>  
                                            <select className="form-select" id='pregunta' onChange={(e)=> setPregunta(e.target.value)}  aria-label="Default select example">
                                                <option value="¿Cómo se llama tu mascota?">¿Cómo se llama tu mascota?</option>
                                                <option value="¿Cual es tu color favorito?">¿Cual es tu color favorito?</option>
                                            </select>
                                        </div>
                                     <div className="mb-3">
                                         <label className="form-label mb-1 text-primary">Respuesta</label>
                                         <input className="form-control form-control-lg input-login rounded-1 text-black"
                                             type="text" name="inp_usario" required onChange={(e)=>setRes(e.target.value)}
                                             placeholder="Introduce tu respuesta" />
                                     </div>
                                     <div className="text-center mt-3">
                                       <button type="submit" 
                                       className="btn btn-lg btn-black  rounded-8">Crear</button>
                                     </div>
                                     <br/>

                                     <a href="login" className="account ">Iniciar sesión</a><br/>

                                 </form>

                             </div>
                         </div>
                     </div>

                 </div>
             </div>
         </div>
     </div>
 </main>
    </div>
  )
}
