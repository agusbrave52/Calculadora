import React from "react";
import { Link } from "react-router-dom";

const BarraEleccion = ({ selected }) => {
  if(selected === 'Inicio'){
    return(
      <nav>
        <ul>
          <li>
            <Link to="/opcion1">Geometria</Link>
          </li>
          <li>
            <Link to="/opcion2">Proximamente</Link>
          </li>
        </ul>
      </nav>
    );
  }
  else if(selected === 'Geometria'){
    return(
      <nav>
        <ul>
          <li>
            <Link to="/Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/opcion1">Areas</Link>
          </li>
          <li>
            <Link to="/opcion2">Perimetros</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default BarraEleccion