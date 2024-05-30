import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Blog from "./page/Blog";
import Login from "./components/Login"
import Registration from "./components/Registration";
import Language from "./language/Language";
import Deshboard from "./page/Deshboard";
import User from "./components/deshboard/User";
import BlogDeshboard from "./components/deshboard/Blog";
import BlogCreate from "./components/deshboard/BlogCreate";
import Tutorial from "./components/deshboard/Tutorial";
import TutorialCreate from "./components/deshboard/TutorialCreate";
import Discussion from "./components/deshboard/Discussion";
import DiscussionCreate from "./components/deshboard/DiscussionCreate";
import Course from "./components/deshboard/Course";
import CourseCreate from "./components/deshboard/CourseCreate";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/language/:id" element={<Language/>}/>
        <Route path="/deshboard" element={<Deshboard/>}/>

        <Route path="/deshboard/user/all" element={<User/>}/>
        <Route path="/deshboard/blog/create" element={<BlogCreate/>}/>
        <Route path="/deshboard/blog/all" element={<BlogDeshboard/>}/>
        <Route path="/deshboard/tutorial/all" element={<Tutorial/>}/>
        <Route path="/deshboard/tutorial/create" element={<TutorialCreate/>}/>
        <Route path="/deshboard/discussion/all" element={<Discussion/>}/>
        <Route path="/deshboard/discussion/create" element={<DiscussionCreate/>}/>
        <Route path="/deshboard/course/all" element={<Course/>}/>
        <Route path="/deshboard/course/create" element={<CourseCreate/>}/>

        

       </Routes>
       <Footer/>
     </BrowserRouter>
    
    
    </>
  )
}

export default App