import React, {Component, useState} from 'react';

function MiComponente({nombre}){
    let [contador,setContador] = useState(1);
    return (
        <div>
            El valor del contador es : {contador}
            <button className = "btn btn-danger" onClick={() => setContador(contador*3) }>Aumentar</button>
        </div>
    );
}

let MiComponente1 = ({nombre}) => {
    return ( 
        <div>Hola {nombre} desde compoente 2</div>
    );
}

export {MiComponente1,MiComponente};