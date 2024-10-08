import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Profile from "./page/Profile";
import CourseHome from "./page/CourseHome";
import Contest from "./page/Contest";
import Quiz from "./components/quiz/Quiz";
import BlogDetails from "./page/BlogDetails";
import Player from "./page/Player";
import CourseList from "./page/CourseList";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseHome />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/course/:videoCategory" element={<Player />} />
          <Route path="/courseList/" element={<CourseList />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contest/:title" element={<Quiz />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/language/:header/:subTitle" element={<Language />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/deshboard" element={<Deshboard />} />
          <Route path="/deshboard/user/all" element={<User />} />
          <Route path="/deshboard/blog/create" element={<BlogCreate />} />
          <Route path="/deshboard/blog/all" element={<BlogDeshboard />} />
          <Route path="/deshboard/tutorial/all" element={<Tutorial />} />
          <Route
            path="/deshboard/tutorial/create"
            element={<TutorialCreate />}
          />
          <Route path="/deshboard/discussion/all" element={<Discussion />} />
          <Route
            path="/deshboard/discussion/create"
            element={<DiscussionCreate />}
          />
          <Route path="/deshboard/course/all" element={<Course />} />
          <Route path="/deshboard/course/create" element={<CourseCreate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App