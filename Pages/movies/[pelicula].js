// Archivo de pages/movies/[pelicula].js

import React from "react";

export default function pelicula(props) {
    const { title } = props;

    return (
        <div>
            <h1>Esta es la película {title}</h1>
        </div>
    );
}