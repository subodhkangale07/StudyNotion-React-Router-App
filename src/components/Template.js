import React from "react";
import FrameImage from "../assets/frame.png"
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Template = ( {title, desc1, desc2, image, formtype, setIsLoggedIn} ) => {
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-10 mx-auto gap-x-12 gap-y-0">

           <div className="w-11/12 max-w-[450px]">
           <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] mb-5">
            {title}
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem]">
                <span className="text-richblack-100">{desc1}</span> 
                <br/>
                <span className="text-blue-100 italic">{desc2}</span> 
            </p>

            { formtype === "signup" ? 
            (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

            
           </div>

           <div className="relative w-11/12 max-w-[450px] ">
            <img src={FrameImage}
            width={558}
            height={504}
            loading="lazy"
            alt="pattern" />

            <img src={image}
            alt="Students"
            width={558}
            height={490}
            loading="lazy" 
            className="absolute max-w-[450px] -top-4 right-4"/>

           </div>
          
        </div>
    )
}

export default Template;