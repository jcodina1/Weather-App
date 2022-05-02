import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from '../components/about.jsx';
import Ciudad from '../components/ciudad.jsx';




const apiKey = '6d179ceb0a1ae78b673c89140b87e332';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    const ciudadFiltrada = cities.filter(ciudad => ciudad.id !== id)
    setCities(ciudadFiltrada);

  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const Nciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            pais: recurso.sys.country
          };
          const ciudadEncontrada=cities.find(ciudad=>ciudad.id===Nciudad.id)
          if(ciudadEncontrada)return alert("La ciudad ya se encuentra")
          setCities(oldCities => [...oldCities, Nciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
     
  }
  function onFilter(ciudadId) {
    let Nciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(Nciudad.length > 0) {
        return Nciudad[0];
    } else {
        return null;
    }
  }
  
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route path='/about' component={About} />
        
      
        <Route 
         exact path='/'
          render={()=><Cards  cities={cities} onClose={onClose} />}
        />  
            
      <Route
          exact path='/ciudad/:ciudadId'
          render={ (props) => <Ciudad {...props} city={onFilter(props.match.params.ciudadId)}/> }
        />
      </div>
    
  );
}

export default App;
