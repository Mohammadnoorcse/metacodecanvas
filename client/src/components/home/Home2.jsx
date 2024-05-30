import './home.css'
import {HeaderCard} from "../../Data/HeaderCard.js"
import HeaderCards from './HeaderCards.jsx'
const Home2 = () => {
  return (
    <div className="home2 width-100  w-center h-auto" >
        <div className="home2-content container-content flex flex-col gap-5 justify-center items-center">
           <h2 className='py-4 lg:text-4xl md:text-4xl sm:text-3xl tracking-tight font-bold'>Choose a tutorial for you</h2>
           <div className='headercard gap-5'>
            {HeaderCard.map((value)=>(
                <HeaderCards key={value._id} value={value}/>
            ))}

           </div>
        </div>
     </div>
  )
}

export default Home2