
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask,setNewTask]= useState("");
  const handleChange =(event)=>{
    setNewTask(event.target.value)
  }
  const addTask =()=>{
    
    setTodoList([...todoList,newTask]);
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>add task</button>
      </div>
      <div className="list">
    
      {todoList.map((task)=>{ 
        return <h1>{task}</h1>;
        
        

      }
      )
      }
      </div>
    </div>
  );
}

export default App;
