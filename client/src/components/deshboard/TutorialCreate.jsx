import { useState } from "react";
import "./deshboard.css";
import BottomSidebar from "./BottomSidebar";
import Swal from "sweetalert2";

const TutorialCreate = () => {
  let language="eng";
  const [headername, setHeadername] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subDescriptionData, setSubDescription] = useState([{ title: "", description: "", code: "" }]);
  const [codeItem, setCodeItem] = useState(false);
  const [indexItem,setIndexItem] = useState(0);

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
    setSubDescription([...subDescriptionData, { title: "", description: "", code: "" }]);
    setIndexItem((prevIndex) => prevIndex + 1);
   
  };
  console.log(indexItem);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tutorialData = {
      header: headername,
      language,
      subTitle,
      content: subDescriptionData,
    };

    try {
      const response = await fetch(
        "https://metacodecanvas-dvz3.vercel.app/api/v1/createTutorial",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tutorialData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        success();
        // Reset form fields
        setHeadername("");
        setSubTitle("");
        setSubDescription([{ title: "", description: "", code: "" }]);
      } else {
        alert(`Failed to create tutorial: ${data.message}`);
      }
    } catch (error) {
      console.error("Error creating tutorial:", error);
      alert("An error occurred while creating the tutorial");
    }
  };


  const success = () => {
    Swal.fire({
      title: "Done!",
      text: "Tutorial Saved!",
      icon: "success"
    });
  };
 

  return (
    <div className="w-full min-h-screen w-center bg-color">
      <div className="container-content flex justify-center items-center flex-col gap-2">
        <h1 className="text-white text-xl font-bold pt-3 text-center">
          Tutorial Create
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] max-h-screen flex flex-col gap-3 bg-gray-900 rounded-xl mb-[1rem] p-[1rem] overflow-y-auto scrollbar-hide"
        >
          <div className="w-full">
            <select
              onChange={(e) => setHeadername(e.target.value)}
              value={headername}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 flex items-center max-h-10 overflow-y-auto"
            >
              <option value="">Choose Category</option>
              {headeries.map((cate) => (
                <option key={cate} value={cate} className="py-1 cursor-pointer">
                  {cate}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full"></div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter the Title"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            {subDescriptionData.map((value, index) => (
              <div key={index} className="w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter The Sub Title"
                    value={value.title}
                    name="title"
                    onChange={(e) => handleSubDescriptionDataChange(e, index)}
                    className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 mb-2"
                  />
                </div>
                <div className="w-full">
                  <textarea
                    placeholder="Enter the Sub Title Description"
                    value={value.description}
                    name="description"
                    rows={7}
                    onChange={(e) => handleSubDescriptionDataChange(e, index)}
                    className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex gap-5">
                    <div>
                      <input
                        type="radio"
                        id={`null${index}`}
                        name={`code${index}`}
                        value="Null"
                        checked={!codeItem}
                        onChange={() =>
                          setCodeItem(false)
                        }
                      />
                      <label htmlFor={`null${index}`} className="text-gray-400">
                        {" "}
                        I don't want code
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id={`yes${index}`}
                        name={`code${index}`}
                        value="Yes"
                        checked={codeItem}
                        onChange={() =>
                          setCodeItem( true)
                        }
                      />
                      <label htmlFor={`yes${index}`} className="text-gray-400">
                        {" "}
                        I want code
                      </label>
                    </div>
                  </div>
                  <div className={codeItem ? "w-full" : "hidden"}>
                    <textarea
                      placeholder="Enter the Code"
                      value={value.code}
                      name="code"
                      rows={7}
                      onChange={(e) => handleSubDescriptionDataChange(e, index)}
                      className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 max-h-15 overflow-y-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSubDescription}
              className="text-gray-400 text-left hover:text-white cursor-pointer"
            >
              Add More Content
            </button>
          </div>
          <button
            type="submit"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
        <BottomSidebar />
      </div>
    </div>
  );
};

export default TutorialCreate;
