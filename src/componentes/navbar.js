import React from 'react';
import logo from '../img/icon-helado.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

export default function Navbarr(){
  const history = useNavigate();
  const { isAuthenticated, logout} = useContext(AuthContext);
  const Salir=()=>{
    logout();
    history('/login');
  }
  
  
    return(
    <nav className="navbar navbar-expand-lg bg-warning fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="index.php">
        <img width="50" src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className="nav-link" to={'/'}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={'/productos'}>Productos</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to={'/buscar'}>Buscar</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={'/somos'}>¿Quienes somos?</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to={'/ayuda'}>Ayuda</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to={'/iot'}>Iot</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            {isAuthenticated !== null ? (
              isAuthenticated ? (
                <div>
                  <input type="button" className="btn btn-success me-2" onClick={Salir} value="Logout"/> 
                  <Link className="btn btn-success me-2" to={'/perfil'}>Perfil</Link>
                </div>
              ) : (
                <div>
                  <Link className="btn btn-success me-2" to={'/login'}>Login</Link>
                  <Link className="btn btn-success" to={'/registro'}>Registro</Link>
                </div>
              )
            ) : null}
          </div>

        </div>
      </div>
    </nav>
    )      
}
