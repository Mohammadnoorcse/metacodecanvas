import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./page/Home";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Blog from "./page/Blog";
import Login from "./components/Login"
import Registration from "./components/Registration";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        
        

       </Routes>
       <Footer/>
     </BrowserRouter>
    
    
    </>
  )
}

export default App