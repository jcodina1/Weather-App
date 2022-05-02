import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css';

export default function Card ({min, max, name, img, onClose, id, pais}) {
function grados(g){
let Ngrados= g-273.15;
return Ngrados
}


    return (
      <div className="card">
        
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`} >
            <h5 className="card-title">{name}<img className="ico" src={"https://flagcdn.com/20x15/"+pais.toLowerCase()+".png"}  alt="" /></h5>
          </Link>
        
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{grados(min).toFixed()}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{grados(max).toFixed()}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
            
          </div>
         
        </div>
       
      </div>
    );
};
