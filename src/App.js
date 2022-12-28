
import './App.css';
import  Axios  from 'axios';
import { useState } from 'react';

function App() {

  const[name,setName]=useState("")
  const [predictAge,setPredictAge]=useState(null)

  const fetchDetails=()=>{
    Axios.get(`https://api.agify.io?name=${name}`)
    .then(
      (res)=>{
        setPredictAge(res.data);
        console.log(res.data);
      }
      
    )
  }
  

  return (
    <div className="App">
      <button onClick={fetchDetails}>predict age </button>
      <input placeholder='ex.Tanay...' onChange={(event)=>{ setName(event.target.value)}}  ></input>
      <h1>name :{predictAge?.name}</h1>
      <h1>predicted age :{predictAge?.age}</h1>
      <h1>count :{predictAge?.count}</h1>

     
      
    </div>
  );
}

export default App;
