
import './App.css';
import  Axios  from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const[catFact,setCatFact]= useState("")

  const fetchFact=()=>{
    Axios.get("https://catfact.ninja/fact")
    .then((res)=>{
    setCatFact(res.data.fact)})

  }

  useEffect(()=>{
    fetchFact();
    },[]) 

  return (
    <div className="App">
      <button onClick={fetchFact}>generate cat fact </button>
      <p>{catFact}</p>
      
    </div>
  );
}

export default App;
