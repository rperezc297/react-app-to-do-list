import { useState } from "react"

export const useFormulario = (inicialState={}) => {

  const [inputs,setInputs]  =useState(inicialState);

 const handleChange = e => {
        const{name,value,checked,type}= e.target;

        setInputs((old) => ({
                ...old,
                [name]: type==="checkbox"? checked:value


        }))
  };

  const reset=()=>{
    setInputs(inicialState)
  }
  return[inputs,handleChange,reset]
}
