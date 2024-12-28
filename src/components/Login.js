import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setSignInForm]= useState(true);
 const toggleSignInForm = ()=>{
setSignInForm(!isSignInForm);  // if it is signin form change it to signup form or vice-versa
 }
  return (

    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="logo"
        />
      </div>
       {/* bg-opacity used to make the bg transparent ,, if you create large forms use FORMIK library */}
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"> 
        <h1 className="font-bold text-3xl  py-4 w-full">{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm &&(<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4  my-4 w-full bg-gray-700"
        />
              
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In": "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New To Netflix? Sign Up Now": "Already Registered? Sign In Now..."} </p>
      </form>
    </div>
  );
};

export default Login;
