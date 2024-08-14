import React from "react";
import LoginPoster from "./LoginPoster";
import LoginForm from "./LoginForm";
import BrandLogo from "./BrandLogo";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <LoginForm />
      </div>
      <div className="col-span-6">
        <LoginPoster />
      </div>
      </div>
  );
};

export default LoginPage;
