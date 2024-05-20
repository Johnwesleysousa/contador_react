import React, { useState } from 'react';



function Contador() {

  const [contador, setContador] = useState(0);



  const incrementar = () => {

    setContador(contador + 1);

  };



  const decrementar = () => {

    setContador(contador - 1);

  };



  return (

    <div className='container'>


      <div className="cont">

        <div className="center">

          <h2>Contador</h2>

          <p>Valor: {contador}</p>

          <button onClick={incrementar}>Incrementar</button>

          <button onClick={decrementar}>Decrementar</button>
        </div>



      </div>


    </div>

  );

}



export default Contador; 