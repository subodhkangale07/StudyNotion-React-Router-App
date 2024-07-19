import React, { useState } from "react";
import { AiOutlineEyeInvisible ,AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ( {setIsLoggedIn}) => {

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData( (prevData) => ( 
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student")

    const [formData, setFormData] = useState( {
        firstname:"",lastname:"", password:"",email:"",confirmPassword:""
    })
    

    function submitHandler (event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          toast.error("Password and Confirm Password are not matching");
          return;
        }
    
        setIsLoggedIn(true);
        toast.success("Account Created Successfully");
    
        const accountData = {
          ...formData,
        };
        
        const finalData = {
          ...accountData,
          accountType
        };
        console.log("Printing the final Data ")
        console.log(finalData);
        navigate("/dashboard");
      }

    return (
        
        <div>
          {/* student intructor Tab */}
            <div className="flex rounded-full bg-richblack-800 p-1 gap-x-1 mt-3 max-w-max">

                <button onClick={() => setAccountType("student")} 
                  className={`${accountType === "student" 
                  ? "bg-richblack-900 text-richblack-5"
                  :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                  Student
                </button>

                <button onClick={() => setAccountType("Instructor")} 
                  className={`${accountType === "Instructor" 
                    ? "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} >
                   Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>

                <div className="flex gap-x-4">
                <label className="w-full mt-[10px]">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] w-full ">
                      First Name <sup className="text-pink-200">*</sup> </p>
                    <input 
                    required
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    placeholder="Fist Name"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                      shadow-sm shadow-richblack-5 "
                    />
                </label>
                <label className="w-full mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                      Last Name <sup className="text-pink-200">*</sup> </p>
                    <input 
                    required
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    placeholder="Last Name"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                      shadow-sm shadow-richblack-5 "
                    />
                </label>
                </div>

                <div className="mt-[10px]">
                <label className="w-full mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                      Email Address <sup className="text-pink-200">*</sup> </p>
                    <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email Address"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                      shadow-sm shadow-richblack-5 "
                    />
                </label>
                </div>

                <div className="flex gap-x-4 mt-[10px]">
                  <label className="relative w-full mt-[10px]">
                       <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                        Create Password <sup className="text-pink-200">*</sup> </p>
                     <input
                       required
                       type={showPassword?("text"):("password")}
                       name="password"
                       value={formData.password}
                       placeholder="Enter Password"
                       onChange={changeHandler}
                       className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                      shadow-sm shadow-richblack-5 "
                    />
                     <span onClick={() => setShowPassword((prev) => !prev)} 
                      className="absolute right-3 top-[38px] cursor-pointer" >
                          {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                          (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                     </span>

                   </label>

                   <label className="relative w-full mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                      Confirm Password <sup className="text-pink-200">*</sup> </p>
                    <input 
                    required
                    type={showConfirmPassword ? ("text"): ("password")}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  
                      shadow-sm shadow-richblack-5 "
                    />
                         <span onClick={() => setConfirmPassword((prev) => ! prev)} 
                          className="absolute right-3 top-[38px] cursor-pointer" >
                             {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                             (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                         </span>
                   </label>

                </div>

                <button className="w-full  bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-[30px] ">
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignUpForm;