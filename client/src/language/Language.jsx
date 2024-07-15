
import "./language.css";
import {Data} from "../Data/Data";
import {useParams,useNavigate} from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {FaBars} from "react-icons/fa"
import { useEffect, useState } from "react";
import axios from "axios";



const code=[
    {
        value:`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        
        </body>
        </html>`
    }
]

const Language = () => {

    const { header, subTitle } = useParams();
    const [tutorialData, setTutorialData] = useState([]);
    const [mobaileView,setMobaile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchTutorial() {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/v1/ReadTutorialByHeaderAndSubtitle?header=${header}&subTitle=${subTitle}`
          );
          setTutorialData(response);
        } catch (error) {
          console.error(error);
        }
      }
      fetchTutorial();
    }, [header, subTitle]);

    console.log(tutorialData);

    


   
  return (
    <div className="width-100 h-auto text-white w-center lanaguage ">
      <div className="container-content relative flex  md:gap-5 gap-3">
        <div className="w-60 min-h-screen sidebar">
         {/* Sidebar */}
        <div className="w-full max-h-screen bg-gray-900 flex  flex-col gap-2 md:px-2 mt-14 overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide">
         {/* sideitem */}
         {Data.map((value)=>(
           <div key={value._id} className="sideitem w-full py-1 text-center hover:bg-gray-700 cursor-pointer rounded-lg ">
           <span className="text-gray-400 hover:text-white" onClick={()=>navigate(`/language/${header}/${value.subTitle}`)}>{header} {value.subTitle}</span>
       </div>
         ))}
        
        </div>

        </div>
        {/* mobaile view */}
        <div className="w-60 min-h-screen absolute left-0 mobaile-sidebar">
            <FaBars className="mt-14 ml-2 fixed cursor-pointer" onClick={()=>setMobaile(!mobaileView)}/>

        <div className={mobaileView?"w-full max-h-screen bg-gray-900 flex  flex-col gap-2 md:px-2 mt-14 overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide":"hidden"}>
        
         {Data.map((value)=>(
           <div key={value._id} className="sideitem w-full py-1 text-center hover:bg-gray-700 cursor-pointer rounded-lg ">
           <span className="text-gray-400 hover:text-white" onClick={()=>navigate(`/language/${header}/${value.subTitle}`)}>{header} {value.subTitle}</span>
       </div>
         ))}
        
        </div>
          
        </div>

         {/* other part */}
          <div className="w-full max-h-screen flex flex-col md:px-5 gap-5 mt-14 px-0 overflow-hidden hover:overflow-y-auto scroll-smooth scrollbar-hide">
            {/* item */}
            <div className="flex flex-col md:px-5 px-0 gap-5">
            <span className="pt-5 font-bold text-xl">React Introduction</span>
             <p className="text-gray-400">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                 to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently with desktop
                 publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="max-h-[15rem] bg-gray-50 rounded-xl text-black md:px-4 px-0 py-4 overflow-hidden overflow-y-auto">
               

               <SyntaxHighlighter 
               language="html" 
               customStyle={{borderRadius:"10px",padding:"8px"}}
               wrapLongLines={true}
               wrapLines={true}
               >
               {code[0].value}

              </SyntaxHighlighter>
            </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Language