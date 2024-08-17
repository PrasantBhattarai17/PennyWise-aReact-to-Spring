import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signUpschema } from "../../Helper/UserValidation";
import BrandLogo from "./BrandLogo";
import { useDispatch } from "react-redux"; 
import { addUser } from "../../Store/loginslice";
import { PathReg } from "../../utils/constants";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to handle form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State to handle errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data using Yup schema
      await signUpschema.validate({
        name: formData.username,
        email: formData.email,
        password: formData.password,
        cpassword: formData.confirmPassword,
      }, { abortEarly: false });

      const response = await fetch(PathReg, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
      }

      const data = await response.text();
      console.log("API Response:", data);
      dispatch(addUser(formData.username));

      // Navigate to the OTP page if registration is successful
      navigate("/otppage");

    } catch (err) {
      if (err.name === "ValidationError") {
        // Handle validation errors
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        // Handle API errors
        console.error(err.message);
        alert("An error occurred while registering. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="h-[100px] bg-gray-100">
        <BrandLogo />
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded-md h-[600px]">
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-2/3 h-[550px] gap-2 rounded-xl shadow-xl border-2"
        >
          <h1 className="mr-24 mb-5 font-sans font-semibold text-2xl">
            Create a New account
          </h1>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.username}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.password}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          {errors.cpassword && <p className="text-red-500 text-sm">{errors.cpassword}</p>}
          <button 
            type="submit"
            className="border-2 mt-5 p-2 w-1/2 text-2xl font-bold font-sans bg-[blueviolet] text-white rounded-lg shadow-lg"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
