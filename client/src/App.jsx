import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
     

       </Routes>
       <Footer/>
     </BrowserRouter>
    
    
    </>
  )
}

export default App