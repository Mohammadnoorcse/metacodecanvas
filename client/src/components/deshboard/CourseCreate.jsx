import React, { useState } from 'react'

const CourseCreate = () => {
  const [videoCat,setVideoCat] = useState("");
  const [title,setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
    const videoItem = [
      "html",
      "css",
      "python",
      "c",
      "c++",
      "java",
      "javascript",
    ];
    
  return (
    <div className="w-full min-h-screen w-center bg-color">
      <div className="container-content flex justify-center items-center flex-col gap-2">
        <h1 className="text-white text-xl font-bold pt-3 text-center">
          Course Create
        </h1>
        <form
          action=""
          className="w-full md:w-[60%] max-h-screen flex flex-col gap-3 bg-gray-900 rounded-xl mb-[1rem] p-[1rem] overflow-y-auto scrollbar-hide"
        >
          <div className="w-full">
            <select
              onChange={(e) => setVideoCat(e.target.value)}
              value={videoCat}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2 flex items-center max-h-10 overflow-y-auto"
            >
              <option value="">Choose Category</option>
              {videoItem.map((cate) => (
                <option key={cate} value={cate} className="py-1 cursor-pointer">
                  {cate}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder="Enter the Video Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
            />
          </div>
          <div className="w-full">
            <input
              type="file"
              accept="video/*"
              placeholder="Enter the Video Title"
              // value={videoFile}
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-1 px-2"
            />
          </div>
          <button
            type="submit"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseCreate