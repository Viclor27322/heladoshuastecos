import React,{ useContext,useEffect } from 'react'
import logo from '../img/icon-helado.png';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

function Navbar2() {
  const { isAuthenticated,logout } = useContext(AuthContext);
  const history = useNavigate();
  useEffect(()=>{
    if(!isAuthenticated){
        history('/');
    }
  })
  const Salir=()=>{
    logout();
    history('/login');
  }
  return (

    <div>
      <nav class="navbar navbar-expand-lg bg-warning fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="index.php">
        <img width="50" src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page"   to={'/admin'}>Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/crudP'}>Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={'/crudS'} >Usuarios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/ventas'}>Ventas</Link>
            </li>
          </ul>
          <div className="dropdown">
            <input type="button" className="btn btn-success me-2" onClick={Salir} value="Logout"/>  
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
          </ul>
        </div>

        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar2
