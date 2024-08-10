// import logo from "../../assets/logo.png"
import profile from "../../assets/profile.webp"
import{Link} from "react-router-dom"
import "./layout.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { getUserDetails, removeUserSessions } from "../../Helper/SessionHelperUser";

const Navbar = () => {
  const navigate = useNavigate();
  const [drop,setDrop] = useState(false);

  const user = true;
  const admin = false;

  const UserDetails=getUserDetails();

  const onLogout=()=>{
    removeUserSessions();
}

  return (
    <>
     <div className="navbar width-100 w-center h-14 fixed top-0 z-30" >
      <div className="navbar-content container-content flex justify-between content-center">
         <div className="navbar-item-1 flex gap-5 justify-center content-center ">
            {/* <img src={logo} alt="logo" className=""/> */}
            <div className="flex justify-center content-center">
            <Link to="/" className="text-xl font-bold italic cursor-pointer">MetaCodeCanvas</Link>
            </div>
             <div className="gap-5 course-item ">
              <Link to="/course">Course</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contest">Contest</Link>
             </div>
         </div>
         <div className="navbar-item-2 flex gap-5 justify-center content-center relative">
          <div className="select-item">
          <select name="lang" id="lang">
          <option value="eng">English</option>
          <option value="bangla">Bangla</option>
       
        </select>
          </div>
          {user?admin?<>
              <img src={profile} alt="profile"  className="w-10 h-10 rounded-full cursor-pointer" onClick={()=>setDrop(!drop)}/>
              <div className={drop?"absolute  flex flex-col  gap-1 drop-item":"hidden"}>
                <Link to="/profile">Profile</Link>
                <Link to="/deshboard">Deshboard</Link>
                <Link to="/">Profile</Link>
                {UserDetails ? (
                <Link to={''} onClick={onLogout}>Logout</Link>
                ) : (
                  <Link to={'/login'}>Login</Link>
                )}
              </div>
          
          </>:
          <>
          <img src={profile} alt="profile"  className="w-10 h-10 rounded-full cursor-pointer" onClick={()=>setDrop(!drop)}/>
          <div className={drop?"absolute  flex flex-col  gap-1 drop-item":"hidden"}>
            <Link to="/profile">Profile</Link>
            <Link to="/">Profile</Link>
            <Link to="/">Profile</Link>
          </div>
      
      </>
          
          :<>
          <button className="px-8 py-0.5 font-bold cursor-pointer login-btn" onClick={()=>navigate("/login")}>Login</button>
          
          </>}

         </div>
      </div>

     </div>
    </>
  )
}

export default Navbar
