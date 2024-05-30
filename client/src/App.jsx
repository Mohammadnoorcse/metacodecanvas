import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Blog from "./page/Blog";
import Login from "./components/Login"
import Registration from "./components/Registration";
import Language from "./language/Language";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/language/:id" element={<Language/>}/>
        

       </Routes>
       <Footer/>
     </BrowserRouter>
    
    
    </>
  )
}

export default App