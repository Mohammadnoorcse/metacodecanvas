import { HeaderCard } from "../Data/HeaderCard"
import {Link} from "react-router-dom"
const Contest = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-color mt-14 py-5">
        <div className="container-content grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {HeaderCard.map((value)=>(
                <>
                <Link to={`/contest/${value.name}`} key={value._id} className="flex justify-center items-center rounded-xl cursor-pointer " >
                  <div style={{backgroundColor:`${value.bg}`}}  className="w-full h-full flex justify-center items-center rounded-xl cursor-pointer">
                      <span className="text-center text-bg-400 font-bold">{value.name}</span>
                  </div>
                  </Link>
                </>
            ))}
        </div>

    </div>
  )
}

export default Contest