import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ciudad.css';
export default function Ciudad(props) {

	function grados(g){
		let Ngrados= g-273.15;
		return Ngrados
		}
    const { ciudadId }  = useParams()
    const [infoCity, setInfoCity] = useState({})

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=6d179ceb0a1ae78b673c89140b87e332`)
        .then((respuesta)=> respuesta.json())
        .then((info) => {
								const objetoCiudad = {
											name: info.name,
											temp: info.main.temp,
											weather: info.weather[0].main , 
											wind: info.wind.speed,
											clouds: info.clouds.all,
											latitud: info.coord.lat,
											longitud: info.coord.lon,
											pais:info.sys.country
								}

                setInfoCity(objetoCiudad)
        })
    


    if(props.city){

					return (
							<div className="container1">
								<div className="card1">
									<div className="card__header">
									<span className="tag tag-blue"><img className="iconoClima" src={"http://openweathermap.org/img/wn/"+props.city.img+"@2x.png"}  alt="iconClima" /></span>
									</div>
									<div className="card__body">
										
										<h4>{props.city.name}</h4>
											<p>Temperatura: {grados(props.city.temp).toFixed()} ºC</p>
											<p>Clima: {props.city.weather}</p>
											<p>Viento: {props.city.wind} km/h</p>
											<p>Cantidad de nubes: {props.city.clouds}</p>
											<p>Latitud: {props.city.latitud}º</p>
											<p>Longitud: {props.city.longitud}º</p>
											
									</div>
								
								</div>
							
						
						</div>
					)

		} else if(!infoCity) {
				return (
						<h1> Cargando.... </h1>
				)
				
		} else {
				return (
					<div className="ciudad">
							<div className="container">
									<h2>{infoCity.name}</h2>
									<div className="info">
											<div>Temperatura: {grados(infoCity.temp).toFixed()} ºC</div>
											<div>Clima: {infoCity.weather}</div>
											<div>Viento: {infoCity.wind} km/h</div>
											<div>Cantidad de nubes: {infoCity.clouds}</div>
											<div>Latitud: {infoCity.latitud}º</div>
											<div>Longitud: {infoCity.longitud}º</div>
											<div>Pais:{infoCity.pais}</div>
									</div>
						</div>
					</div>
				)
		}



}
