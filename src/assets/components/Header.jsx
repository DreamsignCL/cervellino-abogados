import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';

function Header(){
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef(null);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive && menuRef.current) {
            menuRef.current.querySelector("a")?.focus();
        }
    }, [isActive]);

    return(
        <header>
            <div className="header-top">
                <div className="container">
                    <ul className="rrss-top">
                        <li>
                            <a href="https://wa.me/56999995314" title="Contáctanos a nuestra WhatsApp" target="_blank">
                                <FontAwesomeIcon icon={ faWhatsapp } aria-hidden="true" />
                                <span>+569 99995314</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:gcervellino@cervellinoabogados.com" title="Escríbenos a nuestro correo electrónico" target="_blank">
                                <span>gcervellino@cervellinoabogados.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <a className="logo" href="/">
                        <img src={ logo } alt="Cervellino & Asociados" />
                    </a>

                    <div className="main-menu" ref={menuRef}>
                        <button 
                            className="trigger-menu d-md-none" 
                            onClick={toggleNav}
                            type="button" 
                            aria-label="Abrir menú">
                            <FontAwesomeIcon icon={faBars} aria-hidden="true" size="2x" />
                        </button>

                        <nav className="main-menu-desktop d-none d-md-block" aria-label="Navegación principal">
                            <ul>
                                <li>
                                    <NavLink to="/" title="Volver al inicio">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/quienes-somos" title="Ver CEO/ Legal Counsel">CEO/ Legal Counsel</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/areas-de-practica" title="Conoce sobre nuestras Áreas de práctica">Áreas de Práctica</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/soluciones-legales" title="Descubre nuestras Soluciones Legales">Soluciones Legales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacto" title="Contáctanos para mayor información">Contacto</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div 
                            id="menu_mobile" 
                            className="main-menu-mobile"
                            tabIndex="-1" 
                            aria-labelledby="menuMobileLabel" 
                            aria-hidden={!isActive}
                            style={{ display: isActive ? "block" : "none" }}>

                            <div className="menu-content">
                                <div className="d-flex justify-content-end">
                                    <button 
                                        className="close-menu" 
                                        onClick={toggleNav}
                                        type="button" 
                                        aria-label="Cerrar menú">
                                        <FontAwesomeIcon icon={faTimes} aria-hidden="true" size="2x" />
                                    </button>
                                </div>
                                
                                <nav aria-label="Navegación principal">
                                    <ul>
                                        <li>
                                            <NavLink 
                                                to="/" 
                                                title="Volver al inicio"
                                                onClick={toggleNav}>
                                                    Inicio
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                            to="/quienes-somos" 
                                            title="Ver CEO/ Legal Counsel"
                                             onClick={toggleNav}>
                                                CEO/ Legal Counsel
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                to="/areas-de-practica" 
                                                title="Conoce sobre nuestras Áreas de práctica" 
                                                onClick={toggleNav}>
                                                Áreas de Práctica
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                to="/soluciones-legales" 
                                                title="Descubre nuestras Soluciones Legales" 
                                                onClick={toggleNav}>
                                                Soluciones Legales
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                to="/contacto" 
                                                title="Contáctanos para mayor información" 
                                                onClick={toggleNav}>
                                                Contacto
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header