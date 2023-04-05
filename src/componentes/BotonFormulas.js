import React from "react";
import '../css/BotonFormulas.css'
import Button from 'react-bootstrap/Button';

function BotonFormulas(props){

  return(
    <>
    <Button variant="primary" onClick={() => props.formulaClick(props.formula)}>Implementar</Button>
    </>
    
  );
}

export default BotonFormulas