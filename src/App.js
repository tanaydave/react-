
import './App.css';
import  Axios  from 'axios';
import { useState } from 'react';

function App() {
  

 
  const [excuse,setExcuse]=useState(null)

  const fetchExcuse=(excuse)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then(
      (res)=>{
        setExcuse(res.data[0].excuse);
         console.log(excuse.excuse);
        
      }
      
    )
  }
  

  return (
    <div className="App">
     
      <h1>Get an excuse </h1>
      <button onClick={
        ()=>{(fetchExcuse("party"));
        }
      }>party </button>
      <button onClick={()=>{(fetchExcuse("office"));
        }}>office</button>
      <button onClick={()=>{(fetchExcuse("family"));
        }}> family</button>
      <h1>{excuse}</h1>



     
      
    </div>
  );
}

export default App;
