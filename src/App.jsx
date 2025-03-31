import { useState } from "react";
import styles from "./App.module.css";
import ToDoForm from "./Component/ToDoForm/ToDoForm";
import ToDoList from "./Component/ToDoList/ToDoList";


const TODO_DEFAULT=[{
  id:"1",
  name:"Charge all the required electronics",
  description:"Charge your PowerBank, Phone, Laptop",
  deadline:"2025-04-01",
  priority:"low",
  completed:true,
},
{
  id:"2",
  name:"Complete React Project",
  description:"Complete two React Projects you are working on and push it to Git",
  deadline:"2025-04-10",
  priority:"high",
  completed:false,
},
{
  id:"3",
  name:"Start Preparing for Interviews",
  description:"Start the JavaScript Course and create note that will be helpful in interviews",
  deadline:"2025-04-30",
  priority:"medium",
  completed:true,
},
{
  id:"4",
  name:"Test with Name only",
  description:"",
  deadline:"",
  priority:"none",
  completed:false
}
]

function App() {
const [todos,setTodos]=useState(TODO_DEFAULT);

function handleCreate(newTodo){
  setTodos((prevTodos)=>[
    ...prevTodos,
    {id: `${prevTodos.length+1}`, newTodo}])
}

function handleUpdate(id,newTodo){
  setTodos((prevTodos)=> prevTodos.map((todo)=> todo.id === id ?newTodo :todo))
}

  return(
  <div className={styles.App}>
    <header className={styles.Header}>
      <img className={styles.Logo} src="/to-do.png" />
      <h2 className={styles.Title}>To-Do-App</h2>
    </header>
    <div className={styles.AppContainer}>
      <ToDoForm onCreate={handleCreate}/>
      <ToDoList todos={todos} onUpdate={handleUpdate}/>
    </div>
  </div>
  )
}

export default App