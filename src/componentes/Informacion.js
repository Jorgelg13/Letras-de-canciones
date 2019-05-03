import React from 'react';

function Informacion (props){
    if(Object.keys(props.info).length ===0) return null;
    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
              <img src={props.info.strArtistThumb} alt="logo artista"></img>
              <p className="card-text">Genero: {props.info.strGenre}</p>
              <h2 className="card-text text-center">Biografia </h2>
              <p className="cart-text">{props.info.strBiographyES}</p>
              <p className="card-text">
                <a href={`https://${props.info.strFacebook}`} target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${props.info.strTwitter}`} target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-twitter"></i>
                </a>
              </p>
            </div>
        </div>
    )
}

export default Informacion;