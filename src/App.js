import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "./components/homepage/index.js"
import './App.css';
import Login from "./components/login/index.js"
import Home from "./components/home/home.js"
import Aboutus from "./components/aboutus/index.js";
import Contactus from "./components/contactus/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/homepage" element={<Homepage/>}/>
        <Route exact path="/homepage/home" element={<Home/>}/>
        <Route exact path="/homepage/contactus" element={<Contactus/>}/>  
        <Route exact path="/homepage/aboutus" element={<Aboutus/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
