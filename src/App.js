import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  //let temperatureColor = 'cold'
  //let temperatureValue = '10'
  const [temperatureColor, setColor] = useState('cold');
  const [temperatureValue, setValue] = useState(10);
  
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura.
  function Suma(){
    setValue(temperatureValue+1)
    //console.log(temperatureValue)
    if (temperatureValue+1 >=30){
      setValue(30)
    }
    Check(temperatureValue)
  }
  function Resta(){
    setValue(temperatureValue-1)
    //console.log(temperatureValue)

    if (temperatureValue <=0){
      setValue(0)
    }
    Check(temperatureValue)
    
  }

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  function Check(temperatureValue){
    if (temperatureValue >= 19){
      setColor('hot')
      console.log(temperatureValue)
    } 
    if(temperatureValue < 19){
      setColor('cold')
      console.log(temperatureValue)
    }
  }


// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={Suma}>+</button>
        <button onClick={Resta}>-</button>
      </div>
    </div>
  );
}

export default App;
