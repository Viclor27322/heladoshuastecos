    import React, {useEffect, useState} from 'react';
    import axios from 'axios';
    import { AuthContext } from '../Auth/AuthProvider';
    import { useNavigate } from 'react-router-dom';
    import { useContext } from 'react';

    export default function Compras() {
        const url='https://api-rest-equi.vercel.app/api/ventass';
        const [compras,setCompras] = useState([]);
        const { isAuthenticated,user } = useContext(AuthContext);
        const history = useNavigate();

        useEffect(()=>{
            getCompras();
        },[]);

        useEffect(()=>{
            if(!isAuthenticated){
                history('/');
            }
        });

        const getCompras = async () => {
            try {
                const response = await axios.get(url);
                const prod = response.data.filter(p => p.usuario === user._id);
                setCompras(prod);   
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className='app'>
        <div className='container-fluid'>
            <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr><th>Producto</th><th>Cantidad</th><th>Total</th><th>Fecha</th></tr>
                        </thead>
                        <tbody className='table-group-divider'>
                        {compras.map(({_id,productos,cantidad,total,fecha})=>(
                            <tr key={_id}>
                               <td>{productos[0].nombre}</td>
                               <td>{cantidad}</td>
                               <td>{total}</td>
                               <td>{fecha}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <div className='pb-5'></div>
        </div>
        </div>
    )
    }
