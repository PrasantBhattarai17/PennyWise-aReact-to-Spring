import React from "react";
import LoginPoster from "./LoginPoster";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const switchLog=useSelector((store)=>store.view.toggleLogin)
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        {switchLog?<SignUpForm/> : <LoginForm />}
      </div>
      <div className="col-span-6">
        <LoginPoster />
      </div>
      </div>
  );
};

export default LoginPage;
