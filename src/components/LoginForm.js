import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible ,AiOutlineEye } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

const LogInForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    function changeHandler(event){
        setFormData( (prevData) => ( 
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    const [showPassword, setShowPassword] = useState(false);
    return (
        
            <form onSubmit={submitHandler} 
            className="flex flex-col w-full gap-y-4 mt-6 " >
                <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] ">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                shadow-sm shadow-richblack-5 "
                />
                </label>

                <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] ">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type={showPassword ? ("text"):("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                shadow-sm shadow-richblack-5 "
                />

                <span onClick={() => setShowPassword((prev) => ! prev)} 
                    className="absolute right-3 top-[45px] cursor-pointer" >
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                    (<AiOutlineEye fontSize={24} fill="#AFB2BF" />) }
                </span>

                <Link to="#">
                   <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forget Password
                   </p>
                </Link>

                </label>

                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-6 ">
                    Sign In
                </button>

                <div>
                <div className="flex w-full items-center my-4 gap-x-2 ">
                   <div className=" w-full h-[1px] bg-richblack-700"></div>
                   <p className="text-richblack-700 font-medium leading-[1.375rem] ">OR</p>
                   <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>

            <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[5px] gap-x-2 mt-5 ">
                <FcGoogle/>
                <p>Sign Up With Google</p>
            </button>
                </div>

            </form>
        
    )
}

export default LogInForm;