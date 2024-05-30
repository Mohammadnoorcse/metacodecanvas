import { FaUserCircle } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { FaBookReader } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidCommentDetail } from "react-icons/bi";
import { useState } from "react";
import {Link} from "react-router-dom"

const BottomSidebar = () => {
    const [icon,setIcon] = useState(false);
    const [blog,setBlog] = useState(false);
    const [course,setCourse] = useState(false);
    const [discussion,setDiscussion] = useState(false);
    const [read,setRead] = useState(false);
    
  return (
    <div className="w-full py-4 bg-gray-900 fixed bottom-0 w-center">
      
      <div className="container-content flex justify-between px-8">
        <div className="relative">
            <FaUserCircle className="text-white text-2xl cursor-pointer" onClick={()=>setIcon(!icon)}/>
            <div className={icon?"absolute left-6 top-[-5px] flex gap-2 ":"hidden"}>
                <Link to="/deshboard/user/create">
                 <FaCirclePlus className="text-gray-400 hover:text-white  cursor-pointer"/>
                </Link>
                <Link to="/deshboard/user/all">
                  <BiSolidCommentDetail className="text-gray-400 hover:text-white cursor-pointer"/>
                </Link>
              
            </div>
        </div>

        <div className="relative">
            <FaBlogger className="text-white text-2xl cursor-pointer" onClick={()=>setBlog(!blog)}/>
            <div className={blog?"absolute left-6 top-[-5px] flex gap-2 ":"hidden"}>
                <Link to="/deshboard/blog/create">
                 <FaCirclePlus className="text-gray-400 hover:text-white  cursor-pointer"/>
                </Link>
                <Link to="/deshboard/blog/all">
                  <BiSolidCommentDetail className="text-gray-400 hover:text-white cursor-pointer"/>
                </Link>
              
            </div>
        </div>

        <div className="relative">
            <SiCoursera className="text-white text-2xl cursor-pointer" onClick={()=>setCourse(!course)}/>
            <div className={course?"absolute left-6 top-[-5px] flex gap-2 ":"hidden"}>
                <Link to="/deshboard/course/create">
                 <FaCirclePlus className="text-gray-400 hover:text-white  cursor-pointer"/>
                </Link>
                <Link to="/deshboard/course/all">
                  <BiSolidCommentDetail className="text-gray-400 hover:text-white cursor-pointer"/>
                </Link>
              
            </div>
        </div>

        <div className="relative">
            <FaBookReader className="text-white text-2xl cursor-pointer" onClick={()=>setRead(!read)}/>
            <div className={read?"absolute left-6 top-[-5px] flex gap-2 ":"hidden"}>
                <Link to="/deshboard/tutorial/create">
                 <FaCirclePlus className="text-gray-400 hover:text-white  cursor-pointer"/>
                </Link>
                <Link to="/deshboard/tutorial/all">
                  <BiSolidCommentDetail className="text-gray-400 hover:text-white cursor-pointer"/>
                </Link>
              
            </div>
        </div>

        <div className="relative">
            <GiDiscussion className="text-white text-2xl cursor-pointer" onClick={()=>setDiscussion(!discussion)}/>
            <div className={discussion?"absolute left-6 top-[-5px] flex gap-2 ":"hidden"}>
                <Link to="/deshboard/discussion/create">
                 <FaCirclePlus className="text-gray-400 hover:text-white  cursor-pointer"/>
                </Link>
                <Link to="/deshboard/discussion/all">
                  <BiSolidCommentDetail className="text-gray-400 hover:text-white cursor-pointer"/>
                </Link>
              
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default BottomSidebar