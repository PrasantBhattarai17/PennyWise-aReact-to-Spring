import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { useNavigate } from 'react-router';
import { loginSchema } from '../../Helper/UserValidation';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError('');

    try {
      await loginSchema.validate(formData, { abortEarly: false });
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
      }

      const data = await response.text(); 
      const token = data;
      localStorage.setItem('token', token);

      // Redirect to the last visited page or to overview
      const lastVisitedPage = localStorage.getItem('lastVisitedPage') || '/overview';
      navigate(lastVisitedPage, { replace: true });
    } catch (err) {
      setLoading(false);
      if (err.name === 'ValidationError') {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        setApiError(err.message);
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
          className="flex flex-col items-center justify-center w-2/3 h-[550px] gap-2 rounded-xl md:shadow-xlmd:border-2"
        >
          <h1 className="mb-5 font-sans font-semibold text-2xl">
            Welcome Back! Login to your account
          </h1>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.username}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            className="border-2 m-2 p-3 w-2/3 rounded-md shadow-sm focus:border-[blueviolet] focus:outline-none"
            onChange={handleChange}
            value={formData.password}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <button
            type="submit"
            className={`border-2 mt-5 p-2 w-1/2 text-2xl font-bold font-sans ${
              loading ? 'bg-gray-500' : 'bg-[blueviolet]'
            } text-white rounded-lg shadow-lg`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {apiError && <p className="text-red-500 mt-2">{apiError}</p>}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
