import { useState } from "react";

import "./deshboard.css"
import BottomSidebar from "./BottomSidebar";


const TutorialCreate = () => {
  const [headername, setHeadername] = useState("");
  const [language, setLanaguage] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subDescriptionData, setSubDescription] = useState([]);
  const [codeItem,setCodeItem] = useState(false);

  const headeries = [
    "html",
    "css",
    "python",
    "c",
    "c++",
    "java",
    "javascript",
    
  ];

    // sub description
    const handleSubDescriptionDataChange = (e, i) => {
      const updatedSubDescriptionData = [...subDescriptionData];
      updatedSubDescriptionData[i][e.target.name] = e.target.value;
      setSubDescription(updatedSubDescriptionData);
    };

    const handleAddSubDescription = () => {
      setSubDescription([...subDescriptionData, { title: "", description: "",code:"" }]);
    };

  return (
    <div className="w-full min-h-screen w-center bg-color">
      <div className="container-content flex justify-center items-center flex-col gap-2">
        <h1 className="text-white text-xl font-bold pt-3 text-center">Tutorial Create</h1>
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
                placeholder="Enter the Title"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
              />
            </div>

            <div className="w-full flex  flex-col gap-3">
              {subDescriptionData &&
                subDescriptionData.map((value, index) => (
                  <>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Enter The Sub Title"
                        value={value.title}
                        name="title"
                        onChange={(e) =>
                          handleSubDescriptionDataChange(e, index)
                        }
                        className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
                      />
                    </div>
                    <div className="w-full">
                      <textarea
                        type="text"
                        placeholder="Enter the Sub Title Description"
                        value={value.description}
                        name="description"
                        rows={7}
                        onChange={(e) =>
                          handleSubDescriptionDataChange(e, index)
                        }
                        className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex gap-5">
                        <div>
                          <input
                            type="radio"
                            id="Null"
                            name="code"
                            value="Null"
                            onClick={() => setCodeItem(false)}
                          />
                          <label for="Null"  className="text-gray-400"> I don't want code</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="Yes"
                            name="code"
                            value="Yes"
                            onClick={() => setCodeItem(true)}
                          />
                          <label for="Yes" className="text-gray-400"> I want code</label>
                        </div>
                      </div>

                      <div className={codeItem?"w-full":"hidden"}>
                        <textarea
                          type="text"
                          placeholder="Enter the Code"
                          value={value.code}
                          name="description"
                          rows={7}
                          onChange={(e) =>
                            handleSubDescriptionDataChange(e, index)
                          }
                          className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
                        />
                    </div>

                    </div>
                  </>
                ))}
              <button type="button" onClick={handleAddSubDescription}
               className="text-gray-400 text-left hover:text-white cursor-pointer"
              >
                Add More Content
              </button>
            </div>

            <button className="text-gray-400 hover:text-white cursor-pointer">submit</button>

        </form>

        <BottomSidebar/>

        
      </div>

    </div>
  )
}

export default TutorialCreate