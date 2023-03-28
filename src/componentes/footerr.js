import React from 'react';
import '../css/footer.css';
import codigo from '../img/codigo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <section className="sect1_footer_inf text-white">
            <div id="footer_inf1">
                <h2 className="txt-inf"> Nosotros </h2>
                <p className="txt-inf">Somos una empresa orgullosamente Mexicana que se ha posicionado como líder en la Industria
                    del Helado y Helados Artesanales . Todos nuestros productos son elaborados bajo estrictos
                    procesos de calidad, utilizando fruta de temporada e insumos 100 % naturales1000.</p>
                <Link to={'/terminos'} className="txt-inf" id="terminos-condiciones">TERMINOS Y CONDICIONES</Link>
                <br/>
                <Link to={'/'} className="txt-inf" id="terminos-condiciones">POLITICAS DE PRIVACIDAD</Link>
            </div>

            <div id="footer_inf2">
                <h2 className="txt-inf">Contactos</h2>
                <p className="txt-inf"><i className="fa-solid fa-phone  rs-icons"></i>77 11443040</p>
                <p className="txt-inf"><i className="fa-solid fa-envelope  rs-icons"></i>heladoshuastecos@gmail.com</p>
                <div className="txt-inf ">
                    <a href="https://wa.me/547711443040"><i className="fa-brands fa-whatsapp rs-icons  "></i></a>
                    <a href="https://www.facebook.com/Helados-Huastecos-107166528740265/"><i className="fa-brands fa-facebook  rs-icons "></i></a>
                    <img src={codigo} alt="" width="75px" height="75px" />
                </div>

            </div>

        </section>
        <section className="sect2_footer">
            <p>2022 Copyright La Helados Huastecos</p>
        </section>
    </div>
  )
}
