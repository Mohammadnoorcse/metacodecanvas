import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Blog from "./page/Blog";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/" element={<Home/>}/>
        

       </Routes>
       <Footer/>
     </BrowserRouter>
    
    
    </>
  )
}

export default App