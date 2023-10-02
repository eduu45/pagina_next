import React from 'react';
import '/Styles/StylesHeader.css'

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-contenido">
                <div className="logo-container">
                    <h1 className="logo">
                        <img className="principal" src={""} alt="" /> {/* Asegúrate de proporcionar una fuente para la imagen */}
                    </h1>
                </div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list-item active"><i className="fa-solid fa-house"></i> Inicio</li>
                        <li className="menu-list-item"><i className="fa-solid fa-film"></i> Películas</li>
                        <li className="menu-list-item"><i className="fa-solid fa-tv"></i> Series</li>
                        <li className="menu-list-item"><i className="fa-solid fa-star"></i> Populares</li>
                        <li className="menu-list-item"><i className="fa-solid fa-arrow-trend-up"></i> Tendencias</li>
                    </ul>
                </div>
                <div className="perfil-container">
                    <img className="foto-perfil" src={"/assets/perfil_foto.png"} alt="" />
                    <div className="perfil-text-container">
                        <span className="perfil-text">Perfil</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;
