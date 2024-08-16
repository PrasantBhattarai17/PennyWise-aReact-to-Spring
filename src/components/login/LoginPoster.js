import React from "react";
import { LoginImage } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { ToggleLogin } from "../../Store/transactionSlice";

const LoginPoster = () => {
  const dispatch=useDispatch();
  const isLog=useSelector((store)=>store.view.toggleLogin);
  return (
    <div className=" relative ">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50 "
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-[700px] ">
        <h1 className="text-gray-300 text-8xl font-sans from-neutral-200 mr-56 ">
          Welcome to{" "}
        </h1>
        <h1 className="text-white text-8xl font-sans font-semibold ml-56">
          {" "}
          PennyWise
        </h1>
        <h1 className=" text-4xl font-sans font-semibold mt-10 mr-10 text-gray-300">
          {" "}
          Save Smart,Live Wise!
        </h1>
        <span className="flex gap-2">
          <h1 className="text-white text-2xl font-sans font-bold mt-28">
            {" "}
            {isLog?"New here?":"Already have an account?"}  
          </h1>
          <h1 onClick={()=>dispatch(ToggleLogin())} className="text-2xl font-sans text-gray-300 cursor-pointer font-bold mt-28 hover:underline hover:text-white">
            {isLog?"sign up":"login"}
          </h1>
        </span>
      </div>
    </div>
  );
};

export default LoginPoster;
