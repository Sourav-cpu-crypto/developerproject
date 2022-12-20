import logo from './logo.svg';
import './App.css';
 import {useAuth} from './useContext/AuthProvider'
import Signup from './auth/Signup';
import { BrowserRouter, Routes, Route,Router, Link } from  "react-router-dom";
import Login from './auth/Login';
import AuthProvider from './useContext/AuthProvider';
import Home from './Home';
import Navbar from './Navbar';

function App() {
 
  return (
    <AuthProvider>
     
     <Navbar/>   
    <div className="App">


  
<Routes>
      <Route path="/" >
   
      
     
      <Route exact path="/" element={<Home/>} />
        <Route exact path="signup" element={<Signup/>} />
        <Route  path="login" element={<Login />} />
      
        </Route>
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
