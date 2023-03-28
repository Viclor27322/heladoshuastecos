import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ayuda from './views/ayuda';
import Home from './views/inicio';
import login from './views/login';
import Productos from './views/productos';
import quienes_somos from './views/quienes_somos';
import registro from './views/registro';
import terminos from './views/terminos';
import buscar from './views/buscar';
import { AuthContextProvider } from './Auth/AuthProvider';
import iot from './views/iot';
import perfil from './views/perfil';
import compras from './views/compras';
import crudp from './views/crudp';
import crupS from './views/crupS';
import perfil2 from './views/perfilA';
import ventas from './views/ventas';
import recuperar from './views/recuperar';


function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={Home} ></Route>
              <Route path="/productos" Component={Productos} ></Route>
              <Route path='/somos' Component={quienes_somos}></Route>
              <Route path='/buscar' Component={buscar}></Route>
              <Route path='/ayuda' Component={ayuda}></Route>
              <Route path='/login' Component={login}></Route>
              <Route path='/registro' Component={registro}></Route>
              <Route path='/terminos' Component={terminos}></Route>
              <Route path='/crudP' Component={crudp}></Route>
              <Route path='/crudS' Component={crupS}></Route>
              <Route path='/iot' Component={iot}></Route>
              <Route path='/perfil' Component={perfil}></Route>
              <Route path='/admin' Component={perfil2}></Route>
              <Route path='/ventas' Component={ventas}></Route>
              <Route path='/compras' Component={compras}></Route>
              <Route path='/recuperacion' Component={recuperar}></Route>
            </Routes>
       </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

