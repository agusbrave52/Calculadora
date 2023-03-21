import './App.css';
import freeCodeCampLogo from './imagenes/logo.png'
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate, or } from 'mathjs'


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    console.log(input)
    if(!isNaN(input.charAt(input.length-1)) && val === '𝜋'){
      setInput(input + '+' + 3.14159265359);
    }
    else if(input.charAt(input.length-1) === '.' && val === '𝜋'){
      setInput(input.substring(0,input.length-1) + '+' + 3.14159265359);
    }
    else if(isNaN(input.charAt(input.length-1)) && val === '𝜋'){
      setInput(input + 3.14159265359);
    }
    else if(isNaN(input.charAt(input.length-1)) && isNaN(val) && val !== "√"|| input.charAt(input.length-1) === '.' && val !== "√"){
      setInput(input.substring(0,input.length-1) + val);
    }
    else if(!isNaN(input.charAt(input.length-1)) && val === "√"){
      setInput(input + "*" + val);
    }
    else{
      setInput(input + val);
    }
  };

  const buscarValorRaiz = (texto) =>{
    texto = texto.substring(texto.indexOf("√")+1, texto.length)
    let textoCortado = texto;
    
    for(let i=0; i < texto.length; i++){
      if(isNaN(texto.charAt(i))){
        textoCortado = texto.substring(0,i);
        return textoCortado;
      }
    }
    return textoCortado;
  }

  const calcularResultado = () =>{
    if(input){
      let calculo = input;
      while(calculo.includes("√")){
        let valor = "√" + buscarValorRaiz(calculo);
        calculo = calculo.replace(valor,((Math.sqrt(buscarValorRaiz(calculo))).toString()));
      }
      setInput((evaluate(calculo)).toString())
    }
    else{
      alert("Por favor ingrese valores para realizar los calculos")
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>

        <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          <Boton manejarClic={agregarInput}>√</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          <Boton manejarClic={agregarInput}>^</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          <Boton manejarClic={agregarInput}>𝜋</Boton>
        </div>
        <div className='fila'><BotonClear manejarClear={() => setInput('')}>Limpiar</BotonClear></div>
      </div>
    </div>
  );
}

export default App;
