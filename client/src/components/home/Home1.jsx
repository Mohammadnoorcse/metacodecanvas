import "./home.css";
import student from "../../assets/student.png"
import {Link} from "react-router-dom";
import { motion } from "framer-motion"
const Home1 = () => {
  return (
  <div className="home1 width-100  w-center">
     <div className="home1-content container-content">
        <motion.div className="home1-content-1 "
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 2 }}
     
        >
          <img src={student} alt="student" className=""/>
        </motion.div>
        <div className="home1-content-2 text-center flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Learning to code got simplified.</h1>
            <span className="">Learn the latest technology with interactive, hands-on courses.</span>
            <span>Free courses and Best learning website</span>
             <Link to="/" className="px-8 py-2 details-btn">Details</Link>
        </div>
     </div>
  </div>
  )
}

export default Home1