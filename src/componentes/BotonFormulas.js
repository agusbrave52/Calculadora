import React from "react";

function BotonFormulas(props){

  return(
    <button onClick={() => props.formulaClick(props.formula)}>Implementar</button>
  );
}

export default BotonFormulas