
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { useState , createContext } from "react";
import { Profile } from "./pages/profile";

export const AppContext = createContext();

function App() {
  const [username , setUsername]=useState("tanay")
  return (
    <div className="App">
      <AppContext.Provider value={{username , setUsername}}>
      <Router>
        <div>
           
          <Navbar />


        </div>
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="*" element={<h1>page not found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
