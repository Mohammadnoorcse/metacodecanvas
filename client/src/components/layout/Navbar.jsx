// import logo from "../../assets/logo.png"
import profile from "../../assets/profile.webp"
import{Link} from "react-router-dom"
import "./layout.css"
import { useState } from "react"
const Navbar = () => {
  const [drop,setDrop] = useState(false);
  const login = true;
  return (
    <>
     <div className="navbar width-100 w-center h-14 fixed top-0" >
      <div className="navbar-content container-content flex justify-between content-center">
         <div className="navbar-item-1 flex gap-5 justify-center content-center ">
            {/* <img src={logo} alt="logo" className=""/> */}
            <div className="flex justify-center content-center">
            <Link to="/" className="text-xl font-bold italic cursor-pointer">MetaCodeCanvas</Link>
            </div>
             <div className="gap-5 course-item ">
              <Link to="/">Course</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Discuss</Link>
             </div>
         </div>
         <div className="navbar-item-2 flex gap-5 justify-center content-center relative">
          {login?<>
              <img src={profile} alt="profile"  className="w-10 h-10 rounded-full cursor-pointer" onClick={()=>setDrop(!drop)}/>
              <div className={drop?"absolute  flex flex-col  gap-1 drop-item":"hidden"}>
                <Link to="/">Profile</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Profile</Link>
              </div>
          
          </>:<>
          <button className="px-8 py-0.5 font-bold cursor-pointer login-btn">Login</button>
          
          </>}

         </div>
      </div>

     </div>
    </>
  )
}

export default Navbar