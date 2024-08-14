import React, { useState } from 'react';
import { ErrorToast, IsEmpty, SuccessToast } from '../../Helper/FormHelper';
import { PostRequest } from '../../ApiRequest/ApiRequest';

const CourseCreate = () => {
  const [videoCat, setVideoCat] = useState('');
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const videoCategories = [
    'html',
    'css',
    'python',
    'c',
    'c++',
    'java',
    'javascript',
    'php',
  ];

  const handleUpload = (e) => {
    e.preventDefault();

    if (IsEmpty(videoCat)) {
      ErrorToast('Category Is Required');
      return;
    }
    if (IsEmpty(title)) {
      ErrorToast('Title Is Required');
      return;
    }
    if (!videoFile) {
      ErrorToast('Video Is Required');
      return;
    }

    SuccessToast('Please Wait...');
    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('title', title);
    formData.append('videoCategory', videoCat);

    PostRequest(formData).then((result) => {
      if (result === true) {
        SuccessToast('Video Upload Success!');
        setTitle('');
        setVideoCat('');
        setVideoFile('');
      } else {
        ErrorToast('Something Went Wrong');
        console.log('Something went wrong');
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-color flex justify-center items-center">
      <div className="w-full md:w-2/3 max-w-lg bg-gray-900 rounded-xl p-6 flex flex-col gap-4">
        <h1 className="text-white text-2xl font-bold pt-3 text-center">
          Course Create
        </h1>
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Category</label>
            <select
              onChange={(e) => setVideoCat(e.target.value)}
              value={videoCat}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-2 px-3"
            >
              <option value="">Choose Category</option>
              {videoCategories.map((category) => (
                <option key={category} value={category} className="py-1">
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter the Video Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="w-full outline-none bg-gray-800 rounded-xl text-gray-400 hover:text-white py-2 px-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseCreate;
