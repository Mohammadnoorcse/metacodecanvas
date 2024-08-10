import { useState } from "react";
import BottomSidebar from "./BottomSidebar";
import axios from 'axios';
import { ErrorToast, SuccessToast } from "../../Helper/FormHelper";

const DiscussionCreate = () => {
  const [headername, setHeadername] = useState("");
  const [questionText, setQuestionText] = useState("");
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

  const handleAnswerOptionsDataChange = (e, i) => {
    const { name, value, type, checked } = e.target;
    const updatedAnswerOptionsData = [...answerOptions];
    updatedAnswerOptionsData[i][name] = type === "checkbox" ? checked : value;
    setAnswerOptions(updatedAnswerOptionsData);
  };

  const handleAddAnswerOptions = () => {
    setAnswerOptions([...answerOptions, { answerText: "", isCorrect: false }]);
  };

  const resetForm = () => {
    setHeadername("");
    setQuestionText("");
    setAnswerOptions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      headername,
      questionText,
      answerOptions
    };
    try {
      const response = await axios.post('http://localhost:8000/api/v1/createQuizQuestion', payload);
      SuccessToast("Question Set Successfully");
      resetForm(); // Reset form after successful submission
    } catch (error) {
      ErrorToast("There was an Error");
      console.error("There was an error creating the discussion!", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-color w-center ">
      <div className="container-content flex flex-col gap-3 justify-center items-center">
        <h1 className="text-white text-xl font-bold pt-3 text-center">Create Quiz Questions</h1>
        <form onSubmit={handleSubmit} className="w-full md:w-[60%] max-h-screen flex flex-col gap-3 bg-gray-900 rounded-xl mb-[1rem] p-[1rem] overflow-y-auto scrollbar-hide">

          <div className="w-full">
            <select value={headername} onChange={(e) => setHeadername(e.target.value)} 
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 flex items-center max-h-10 overflow-y-auto ">
              <option value="">Choose Category</option>
              {headeries.map((cate) => (
                <option key={cate} value={cate} className="py-1 cursor-pointer">
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
          <div className="w-full flex flex-col gap-3">
            {answerOptions &&
              answerOptions.map((value, index) => (
                <div key={index} className="w-full flex gap-3">
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
                    checked={value.isCorrect}
                    id={`isCorrect-${index}`}
                    name="isCorrect"
                    onChange={(e) =>
                      handleAnswerOptionsDataChange(e, index)
                    }
                    className="cursor-pointer"
                  />
                </div>
              ))}
            <button type="button" onClick={handleAddAnswerOptions}
              className="text-gray-400 text-left hover:text-white cursor-pointer">
              Add More Content
            </button>
          </div>
          <button type="submit" className="text-gray-400 hover:text-white cursor-pointer">Submit</button>
        </form>
      </div>
      <BottomSidebar />
    </div>
  );
}

export default DiscussionCreate;
