import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../css/BarraEleccion.css';
import PantallaEleccion from "./PantallaEleccion";

const BarraEleccion = ({ seleccion, controlFormula}) => {
  if(seleccion === 'Inicio'){
    return(
      <nav>
        <ul>
          <li className="links">
            <Link to="/Geometria">Geometria</Link>
          </li>
          <li className="links">
            <Link to="/Inicio">Proximamente</Link>
          </li>
        </ul>
      </nav>
    );
  }
  if(seleccion === 'Geometria'){
    return(
      <Fragment>
      <nav>
        <ul>
          <li className="links">
            <Link to="/Inicio">Inicio</Link>
          </li>
          <li className="links" >
            <Link to="/Areas">Areas</Link>
          </li>
          <li className="links">
            <Link to="/Perimetros">Perimetros</Link>
          </li>
        </ul>
      </nav>
      <PantallaEleccion control={controlFormula} />
      </Fragment>
    );
  }
  
}

export default BarraEleccion