import React from "react";
import LoginPoster from "./LoginPoster";
import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { ToggleLogin } from "../../Store/transactionSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const switchLog = useSelector((store) => store.view.toggleLogin);
  return (
    <div className="md:grid md:grid-cols-12 ">
      <div className="md:col-span-6 flex flex-col bg-gray-100 md:max-h-screen ">
        {switchLog ? <LoginForm /> : <SignUpForm />}
        <div className="md:hidden">
          {switchLog ? (
            <span className="flex justify-center gap-1">
              <h1 className=" text-center pb-10 text-xl font-semibold">
                New to PennyWise?
              </h1>
              <h1
                onClick={() => dispatch(ToggleLogin())}
                className=" text-center pb-10 text-xl font-semibold text-gray-500 hover:underline cursor-pointer"
              >
                SignUp
              </h1>
            </span>
          ) : (
            <span className="flex justify-center gap-1">
              <h1 className=" text-center pb-10 text-xl font-semibold">
                Already have an account?{" "}
              </h1>
              <h1
                onClick={() => dispatch(ToggleLogin())}
                className=" text-center pb-16 text-xl font-semibold text-gray-500 hover:underline cursor-pointer"
              >
                Login
              </h1>
            </span>
          )}
        </div>
      </div>
      <div className="md:col-span-6 md:block hidden md:max-h-screen">
        <LoginPoster />
      </div>
    </div>
  );
};

export default LoginPage;
