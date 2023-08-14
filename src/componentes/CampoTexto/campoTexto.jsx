import React, { useEffect, useState } from "react";
import './textoCampo.css'


const CampoTexto = (props) =>{

  //  let valor = 'banana'


    
    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export default CampoTexto