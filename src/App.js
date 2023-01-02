
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

import { Profile } from "./pages/profile";
import { Query,QueryClient,QueryClientProvider } from '@tanstack/react-query';



function App() {
  
  const client= new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      
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
      
      </QueryClientProvider>
    </div>
  );
}

export default App;
