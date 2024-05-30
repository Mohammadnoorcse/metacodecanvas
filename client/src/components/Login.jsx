import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="bg-gray-900 flex items-center justify-center min-h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Log In</h2>
            <form>
                <div className="mb-4">
                    <label for="email" className="block text-sm font-medium text-white">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-4">
                    <label for="password" className="block text-sm font-medium text-white">Password</label>
                    <div className="relative">
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button type="button" className="absolute inset-y-0 right-0 px-4 py-2 text-blue-500">Show</button>
                    </div>
                    <a href="#" className="text-sm text-blue-400 hover:underline mt-2 inline-block">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">Log in</button>
                <div className="flex items-center justify-between mb-4">
                    <hr className="w-full border-gray-600"/>
                    <span className="px-2 text-gray-400">or</span>
                    <hr className="w-full border-gray-600"/>
                </div>
                <div className="flex justify-around mb-4">
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5 mr-2"/>
                    Google
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5 mr-2"/>
                        Apple
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5 mr-2"/>
                        Facebook
                    </button>
                </div>
                <p className="text-center text-gray-400">New to Metacode3? <a href="#" className="text-blue-400 hover:underline" onClick={()=>navigate("/registration")}>Create an account</a></p>
            </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login