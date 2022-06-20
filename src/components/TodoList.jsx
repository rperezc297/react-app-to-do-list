import { useEffect, useState } from "react"
import Formulario from "../Formulario"
import Todo from "./Todo";

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem('todos')){
        setTodos(JSON.parse(localStorage.getItem('todos')));
      }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos]);

  const agregarTodo=(todo) => {
    console.log(todo);
    setTodos((old)=>[...old,todo])

  }

  const eliminarTodo=(id)=>{
    /*el .filter devuelve un array
    se filtran los item que tengan id enviado
    */
    setTodos((old)=>old.filter(item => item.id!==id))

  }

  const editarTodo=(id)=>{

    const editarTodos = todos.map(item=>(
      item.id===id?{...item,estado:!item.estado}:item
    ))

    setTodos(editarTodos)

  }


  return (
    <>
       <Formulario agregarTodo={agregarTodo}/>
       <ul className="list-group list-group-numbered mt-2">
          {        
            //todos.map devuelve un array
            todos.map((item)=>(
            //Nombre que se coloco al enviar 'todo'
            <Todo
              key={item.id}
              todo={item}
              eliminarTodo={eliminarTodo}
              editarTodo={editarTodo}
              />
         
           ))}
       </ul>



       

    </>
  )
}

export default TodoList