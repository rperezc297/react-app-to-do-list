import Swal from "sweetalert2";
import { startTransition, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "./hooks/useFormulario";
const Formulario = ({agregarTodo}) => {

  const initialState={
     nombre:"",
     descripcion:"",
     estado:'pendiente' ,
     prioridad: false,
     
  };  

  const [inputs,handleChange,reset]=useFormulario(initialState);

  const{nombre,descripcion,estado,prioridad}=inputs;
 
  const  handleSubmit =(e)=> {
        e.preventDefault();
        // .trim evalua si se registraron valores
        if(!nombre.trim()){
            //Focus
            e.target[0].focus();
            //Validacion
            Swal.fire({
                title:'Error!',
                text:'No deja el nombre en blanco',
                icon: 'error',
                //confirmButtonText:,
            });
            //console.log('no deje en blanco');
            return;
        }
        if(!descripcion.trim()){
           //Focus
            e.target[0].focus();
            //Validacion
            Swal.fire({
                title:'Error!',
                text:'No deja la descripcion en blanco',
                icon: 'error',
                //confirmButtonText:,
            });
            //console.log('no deje en blanco');
            return;
          }
        
        Swal.fire({
              title:"Exito",
              text:"Tarea Agregada",
              icon:"success"
        });  

        agregarTodo({
              nombre:nombre,
              descripcion:descripcion,
              estado: estado === 'pendiente'?false:true,
              prioridad:prioridad,
              id: uuidv4(),

        });
        reset();
       

  };



  return (
    <>
        <h2>Agregar TODO</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2" 
              name="nombre"
              placeholder="Ingrese nombre"
              value={nombre}
              onChange={handleChange}
              />
            <textarea
              className="form-control mb-2"
              name="descripcion"
              placeholder="Ingrese la descripcion"
              value={descripcion}
              onChange={handleChange}


            />
            <select
              name="estado"
              className="form-control mb-2"
              value={estado}
              onChange={handleChange}


              >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>  
            <div className="form-check">
                 <input
                   className="form-check-input"
                   type="checkbox"
                   checked={prioridad}
                   onChange={handleChange}
                   id="flexCheckDefault"
                   name="prioridad"
                   
                    />
                 <label
                   className="form-check-label"
                   htmlFor="flexCheckDefault">
                    Prioritario
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                    Agregar
            </button>
        </form>
    </>
  )
}

export default Formulario