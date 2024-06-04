import { useState } from "react";
import BottomSidebar from "./BottomSidebar";


const DiscussionCreate = () => {
  const [headername,setHeadername] = useState("")
  const [questionText,setQuestionText] = useState("")
  const [answerOptions, setAnswerOptions] = useState([]);
  const headeries = [
    "html",
    "css",
    "python",
    "c",
    "c++",
    "java",
    "javascript",
    
  ];
 
    // add answer option

    // const handleAnswerOptionsDataChange = (e, i) => {
    //   const updatedAnswerOptionsData = [...answerOptions];
    //   updatedAnswerOptionsData[i][e.target.name] = e.target.value;
    //   setAnswerOptions(updatedAnswerOptionsData);
    // };

    const handleAnswerOptionsDataChange = (e, i) => {
      const { name, value, type, checked } = e.target;
      const updatedAnswerOptionsData = [...answerOptions];
      updatedAnswerOptionsData[i][name] = type === "checkbox" ? checked : value;
      setAnswerOptions(updatedAnswerOptionsData);
    };

    console.log(answerOptions);

    const handleAddAnswerOptions = () => {
      setAnswerOptions([...answerOptions, { answerText: "", isCorrect: false}]);
    };
  return (
    <div className="w-full min-h-screen bg-color w-center ">
      <div className="container-content flex flex-col gap-3 justify-center items-center">
        <h1 className="text-white text-xl font-bold pt-3 text-center">Create Quiz Questions</h1>
        <form action="" className="w-full md:w-[60%] max-h-screen flex flex-col gap-3 bg-gray-900 rounded-xl mb-[1rem] p-[1rem] overflow-y-auto scrollbar-hide">

        <div className="w-full ">
              <select onChange={(e) => setHeadername(e.target.value)} 
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 flex items-center max-h-10 overflow-y-auto "
              >
                 
                 <option value="">Choose Category</option>
                  {headeries.map((cate) => (
                  <option key={cate} value={cate}  className="py-1 cursor-pointer">
                        {cate}
                  </option>
                    ))}
                
              </select>
        </div>
        <div className="w-full">
              <input
                type="text"
                placeholder="Enter the Question"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
              />
            </div>
        <div className="w-full flex  flex-col gap-3">
          {answerOptions && 
          answerOptions.map((value,index)=>(
            <>
              
              <div className="w-full flex gap-3">
                <input
                  type="text"
                  placeholder="Enter The Question Option"
                  value={value.answerText}
                  name="answerText"
                  onChange={(e) =>
                    handleAnswerOptionsDataChange(e, index)
                        }
                  className="w-[95%] outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
                />

               <input
                  type="checkbox"
                  value={value.isCorrect}
                  id="Yes"
                  name="isCorrect"
                  onChange={(e) =>
                    handleAnswerOptionsDataChange(e, index)
                        }
                  className="cursor-pointer"
                />
              </div>
               {/* <div className="w-full flex gap-1">
               <input
                  type="checkbox"
                  value={value.isCorrect}
                  id="Yes"
                  name="isCorrect"
                  onChange={(e) =>
                    handleAnswerOptionsDataChange(e, index)
                        }
                />
                <label for="Yes" className="text-gray-400"> Is it correct answer?</label>
               </div> */}
             
            </>
          ))}
          <button type="button" onClick={handleAddAnswerOptions}
               className="text-gray-400 text-left hover:text-white cursor-pointer"
              >
                Add More Content
              </button>
        </div>
         
        <button className="text-gray-400 hover:text-white cursor-pointer">submit</button>
            
        </form>

      </div>

      <BottomSidebar/>

    </div>
  )
}

export default DiscussionCreate