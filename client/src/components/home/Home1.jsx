import "./home.css";
import student from "../../assets/student.png"
import {Link} from "react-router-dom";
const Home1 = () => {
  return (
  <div className="home1 width-100  w-center">
     <div className="home1-content container-content">
        <div className="home1-content-1 ">
          <img src={student} alt="student" className=""/>
        </div>
        <div className="home1-content-2 text-center flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Learning to code got simplified.</h1>
            <span className="">Learn the latest technology with interactive, hands-on courses.</span>
             <Link to="/" className="px-8 py-2 details-btn">Details</Link>
        </div>
     </div>
  </div>
  )
}

export default Home1