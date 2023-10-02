import React from "react";
import '/Styles/StylesBody.css';
import Link from 'next/link';

    const Body = () => {
        return (
            <div className="Body">
                <div className="content-container">
                    <div className="recomendaciones-content">
                        <img src={"/assets/recomendaciones.jpg"} alt="Recomendaciones"/>
                        <p className="recomendaciones-descripcion">En el misterioso mundo oculto detrás de los armarios
                            de los niños, los monstruos trabajan en la fábrica de sustos de Monsters, Inc., donde
                            asustar a los niños humanos es la fuente principal de energía. Sin embargo, todo cambia
                            cuando una niña humana llamada Boo se cuela en su mundo. Dos monstruos, Mike y Sulley, deben
                            protegerla y descubrir que la risa de los niños puede ser aún más poderosa que sus
                            temores.</p>
                        <button className="recomendaciones-button">¡VER AHORA!</button>
                    </div>

                    <div className="peliculas-lista-container">
                        <h1 className="peliculas-lista-titulo">Recién Añadidos</h1>
                        <div className="peliculas-lista-wrapper">
                            <div className="peliculas-lista">
                                <div className="peliculas-lista-item">
                                    <img className="peliculas-lista-item-img" src={"/assets/pelicula1.jfif"}
                                         alt="Película"/>
                                    <span className="peliculas-lista-item-titulo">WALLE</span>
                                    <p className="peliculas-lista-item-desc">WALLE</p>
                                    <button className="peliculas-lista-item-button">Reproducir</button>
                                </div>

                                <div className="peliculas-lista-item2">
                                    <img className="peliculas-lista-item2-img" src={"/assets/dumbo.jpeg"}
                                         alt="Película"/>
                                    <p className="peliculas-lista-item2-desc">DUMBO</p>
                                    <button className="peliculas-lista-item2-button">Reproducir</button>
                                </div>

                                <div className="peliculas-lista-item3">
                                    <img className="peliculas-lista-item3-img" src={"/assets/nemo.jpg"}
                                         alt="Película"/>
                                    <p className="peliculas-lista-item3-desc">NEMO</p>
                                    <button className="peliculas-lista-item3-button">Reproducir</button>
                                </div>
                            </div>

                            <div className="API">
                                <div className="api-content">S
                            <Link href={"/Pages/API"}>Paises que ven esto</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Body;
