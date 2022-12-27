
import './App.css';
import { useState } from 'react';
import {Task} from "./task"

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask,setNewTask]= useState("");
  const handleChange =(event)=>{
    setNewTask(event.target.value)
  }
  const addTask =()=>{
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName:newTask,
      
    }
    
    setTodoList([...todoList,task]);
  }
  const removeTask=(id)=>{
  setTodoList(todoList.filter((task)=> task.id !== id));
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>add task</button>
      </div>
     
      <div className="list">
      {todoList.map((task)=>{ 
        return <Task taskName={task.taskName} id ={task.id} removeTask={removeTask}/>
         
      }
      )
      }
      </div>
    </div>
  );
}

export default App;
