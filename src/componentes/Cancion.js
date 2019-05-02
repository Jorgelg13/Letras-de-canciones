import React,{Fragment} from 'react'


function Cancion(props){
    if(props.letra.length ===0) return null;
    return(
        <Fragment>
           <h2>Letra Cancion</h2>
           <p className="letra">{props.letra}</p>
        </Fragment>
    )
}

export default Cancion;