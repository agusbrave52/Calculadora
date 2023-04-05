import React from "react";
import BotonFormulas from "./BotonFormulas";

const PantallaEleccion = ({ control }) => {
  if (window.location.pathname === '/Areas'){
    return (
      <div className="contenedor-formulas">
        <ul className="container-fluid">
          <h3>Areas:</h3>
          <div className="row"><li><BotonFormulas formulaClick={control} formula='At'/>Área del triángulo: A = b(base) * h(altura) / 2</li></div>
          <div className="row"><li><BotonFormulas formulaClick={control} formula='Arec' /> Área del rectángulo: A = b(base) * h(altura)</li></div>
          <div className="row"><li><BotonFormulas formulaClick={control} formula='Ac' /> Área del cuadrado: A = l(lado)^2</li></div>
          <div className="row"><li><BotonFormulas formulaClick={control} formula='Aci' /> Área del circulo: A = 𝜋*r(radio)^2</li></div>
          <div className="row"><li><BotonFormulas formulaClick={control} formula='Asc' /> Área del sector del circulo: A = (a(ángulo central)/360) * π * r(radio)^2</li></div>
        </ul>
      </div>
    )
  }
  else{
    return(
      <div>

      </div>
    );
  }
}

export default PantallaEleccion