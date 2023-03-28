import React from "react";
import '../css/BotonFormulas.css'

function BotonFormulas(props){

  return(
    <button onClick={() => props.formulaClick(props.formula)}>Implementar</button>
  );
}

export default BotonFormulas