import { useContext,useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate,Link } from 'react-router-dom';
import admin from '../img/admin.jpg'

const UserProfile2 = () => {
  const { isAuthenticated,user } = useContext(AuthContext);
  const history=useNavigate();
  useEffect(()=>{
    if(!isAuthenticated){
        history('/');
    }
});



  return (
    <div className='row d-flex justify-content-center'>
       {isAuthenticated !== null ? (
              isAuthenticated ? (
                  <div className='col-5'>
                        <div className="card mb-3" >
                      <div className="row g-0 ">
                        <div className="col-md-4 pt-4">
                          <img src={admin} class="img-fluid rounded-start" alt="..."/>
                        </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Bienvenido</h5>
                        <p className="card-text">Perfil: {user.nombre}</p>
                        <p className="card-text">Usuario: {user.nombreUsers}</p>
                        <p className="card-text">Correo: {user.correo}</p>
                        <p className="card-text">{user.rol[0].descripcion}</p>
                      </div>
                    </div>
                  </div>
                      </div>
                      
                </div>
              ) : (
                <div>
                 
                </div>
              )
            ) : null}
      
    </div>
  );
};

export default UserProfile2;