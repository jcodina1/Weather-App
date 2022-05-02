
import React from 'react';
import './about.css';

export default function About(){
  const [errors, setErrors] = React.useState({});
  const [input,setInput]=React.useState({
    name:'',
    email:'',
    mensaje:''
  })
  const handleInputChange=(e)=>{
    
  
    setInput((estado)=>{
      
      console.log(estado)
      return({
        ...estado,
        [e.target.name]: e.target.value
      })
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    console.log(errors)
    
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault() 
    alert('énviado')
    
  }

    return(
    
      <div className="containerA">
        <div className="cardA">
          <div className="card__headerA">
            <h3>Henry - Weater App</h3>            
          </div>
        <div className="card__bodyA">
          <span className="tag1 tag-blue1"> By: Juan Codina </span>
          <p className='p'> Este es un proyecto donde puedes ver las temperaturas máximas y mínimas de cualquier ciudad del mundo gracias a dos API's diferentes que nos dan los datos necesarios para que la app funcione.</p>       
        </div>        
      </div>
      <div className="cardb">
          <div className="card__headerb">
            <h3>Contacto</h3>            
          </div>
        <div className="card__bodyb">
        <form className='form' onSubmit={(e)=>handleOnSubmit(e)}>
          {errors && errors.name && (<p className="danger">{errors.name}</p>)}
          <label className="label">Nombre:</label>
          <input
          className='input'
          type='text'
          name="name"
          placeholder="Nombre completo"
          value={input.name}
          onChange={(e)=>handleInputChange(e)}
          />
          <label className="label">Email:</label>
          {errors && errors.email && (
            <p className="danger">{errors.email}</p>
          )}
          <input
          className='input'
          name="email" type="email"
          placeholder="ejemplo@email.com"
          value={input.email}
          onChange={(e)=>handleInputChange(e)}
          />           
          <label className="label">Mensaje:</label>
          {errors && errors.mensaje && (<p className="danger">{errors.mensaje}</p>)}
          <textarea
          className='input'
          name="mensaje"
          placeholder="Danos tu mensaje"
          value={input.mensaje}
          onChange={(e)=>handleInputChange(e)}
          />
          <input className="submit" name="submit" type="submit" value="Enviar" disabled={Object.keys(errors).length===0?false:true}/>
        </form>   
        </div>        
      </div>
    </div>
    
    )}
    export function validate(input) {
      let errors = {};
      if (!input.email) {
        errors.email = 'E-mail es requerido';
      } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'E-mail es invalido';
      }
      if (!input.name) {
        errors.name = 'Nombre es requerido';
      }
      if (!input.mensaje) {
        errors.mensaje = 'Recuerda escribir el mensaje';
      }  
     
    
      return errors;
    };