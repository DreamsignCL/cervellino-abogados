import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
//import CCIC from '../img/camara-comercio-italiana.png';

function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <a className="logo" href="/">
                                <img src={ logo } alt="Cervellino & Asociados" />
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>
                                Badajoz N°130 Oficina N°703, Piso 7,<br/>
                                Las Condes - Santiago - Chile<br/>
                                Mesa Central <a href="tel:+56029668980" title="Contáctanos a nuestra mesa central">+56 029668980</a>
                            </p>
                            <a href="https://wa.me/56999995314" title="Contáctanos a nuestra WhatsApp" target="_blank">
                                <FontAwesomeIcon icon={ faWhatsapp } aria-hidden="true" />
                                <span>+569 99995314</span>
                            </a>
                        </div>
                        <div className="col-12 col-md-4">
                            <ul className="rrss-bottom">
                                <li>
                                    <a href="https://wa.me/56999995314" title="Contáctanos a nuestra WhatsApp" target="_blank">
                                        <FontAwesomeIcon icon={ faWhatsapp } aria-hidden="true" />
                                        <span>+569 99995314</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/giorgiocervellino/" title="Visita nuestro perfil de Linkedin" target="_blank">
                                        <FontAwesomeIcon icon={ faLinkedin } aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:gcervellino@cervellinoabogados.com" title="Escríbenos a nuestro correo electrónico" target="_blank">
                                        <FontAwesomeIcon icon={ faEnvelope } aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    Copyright © 2026 Cervellino & Asociados Abogados | Powered by Cervellino & Asociados Abogados
                </div>
            </div>
        </footer>
    );
}

export default Footer