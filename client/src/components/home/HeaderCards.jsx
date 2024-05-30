import { Link } from "react-router-dom"


const HeaderCards = ({value}) => {
  return (
    <Link to={`language/${value.name}`} className="w-full">
       <div className="h-auto flex justify-center items-center rounded-2xl card-item" style={{backgroundColor:`${value.bg}`}}>
        <img src={value.icon} alt={value.name} className="w-[10rem] h-[10rem]" />

       </div>
    </Link>
  )
}

export default HeaderCards