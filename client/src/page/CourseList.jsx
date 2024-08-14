import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CourseList = () => {
  return (
    <Fragment>
      <div className="bg-[#282A35] min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

        {/* Card 1 */}
        <Link to='/course/html'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-2xl">HTML</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">HTML Essentials</h2>
          <p className="text-gray-600">Chapter 1</p>
        </div>
        </Link>
        

        {/* Card 2 */}
        <Link to='/course/css'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl">CSS</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">CSS Fundamentals</h2>
          <p className="text-gray-600">Chapter 2</p>
        </div>
        </Link>
        

        {/* Card 3 */}
        <Link to='/course/javascript'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white text-2xl">JS</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">javascript Essentials</h2>
          <p className="text-gray-600">Chapter 3</p>
        </div>
        </Link>
        

        {/* Card 4 */}
        <Link to='/course/c'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-white text-2xl">C</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">C Basics</h2>
          <p className="text-gray-600">Chapter 4</p>
        </div>
        </Link>
        

        {/* Card 5 */}
        <Link to='/course/c++'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-2xl">C++</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">C++ Basic</h2>
          <p className="text-gray-600">Chapter 5</p>
        </div>
        </Link>
        

        {/* Card 6 */}
        <Link to='/course/python'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-pink-500 flex items-center justify-center">
              <span className="text-white text-2xl">PY</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Python Basic</h2>
          <p className="text-gray-600">Chapter 6</p>
        </div>
        </Link>
        

        {/* Card 7 */}
        <Link to='/course/java'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-2xl">JV</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Java Essentials</h2>
          <p className="text-gray-600">Chapter 7</p>
        </div>
        </Link>
        

        {/* Card 8 */}
        <Link to='/course/php'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white text-2xl">PHP</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">PHP Basic</h2>
          <p className="text-gray-600">Chapter 8</p>
        </div>
        </Link>
        

      </div>
    </div>
    </Fragment>
  )
}

export default CourseList
