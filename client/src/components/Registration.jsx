import React, { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmpty, IsEmail } from '../Helper/FormHelper';
import Swal from 'sweetalert2';
import { RegistrationRequest } from '../ApiRequest/ApiRequest';

const Registration = () => {
    const navigate = useNavigate();
    const NameRef = useRef();
    const EmailRef = useRef();
    const PasswordRef = useRef();
    const ImageRef = useRef();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const OnRegistration = (event) => {
        event.preventDefault(); // Prevent form submission

        setLoading(true);

        const Name = NameRef.current.value;
        const Email = EmailRef.current.value;
        const Password = PasswordRef.current.value;
        const image = ImageRef.current.files[0];

        if (IsEmpty(Name)) {
            ErrorToast("Name Required");
        } else if (IsEmpty(Email)) {
            ErrorToast("Email Required");
        } else if (IsEmail(Email)) {
            ErrorToast("Valid Email Required");
        } else if (IsEmpty(Password)) {
            ErrorToast("Password Required");
        } else if (IsEmpty(image)) {
            ErrorToast("Photo Required");
        } else {
            const formData = new FormData();
            formData.append('Name', Name);
            formData.append('Email', Email);
            formData.append('Password', Password);
            formData.append('file', image);

            RegistrationRequest(formData).then((result) => {
                if (result === true) {
                    setLoading(false);
                    navigate("/login");
                    NameRef.current.value = "";
                    EmailRef.current.value = "";
                    PasswordRef.current.value = "";
                    ImageRef.current.value = "";
                    success();
                } else {
                    ErrorToast('Something Went Wrong');
                }
            });
        }
    };

    const success = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You Have Been Registered',
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <Fragment>
            <div className="bg-gray-900 flex items-center justify-center min-h-screen mt-5">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Sign Up</h2>
                    <form onSubmit={OnRegistration} method="post" encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input ref={NameRef} placeholder="Enter Name" type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input ref={EmailRef} placeholder="Enter Email" type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <div className="relative">
                                <input ref={PasswordRef} placeholder="Enter Password" type={showPassword ? "text" : "password"} id="password" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-4 py-2 text-blue-500">
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-sm font-medium text-white">Photo</label>
                            <div className="relative">
                                <input ref={ImageRef} type="file" id="photo" className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" disabled={loading}>
                        {loading ? "Please Wait..." : "Sign Up"}
                        </button>
                        <p className="text-xs text-gray-400 mb-4">This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> apply.</p>
                        <div className="flex items-center justify-between mb-4">
                            <hr className="w-full border-gray-600" />
                            <span className="px-2 text-gray-400">or</span>
                            <hr className="w-full border-gray-600" />
                        </div>
                        <div className="flex justify-around mb-4">
                            <button type="button" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5 mr-2" />
                                Google
                            </button>
                            <button type="button" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" className="w-5 h-5 mr-2" />
                                Apple
                            </button>
                            <button type="button" className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                                Facebook
                            </button>
                        </div>
                        <p className="text-center text-gray-400">Already have an account? <a href="#" className="text-blue-400 hover:underline" onClick={() => navigate("/login")}>Log in</a></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Registration;
