import React, { useState } from 'react';
import LoginPoster from './LoginPoster';
import BrandLogo from './BrandLogo';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { ToggleLogin } from '../../Store/transactionSlice';

const OTPPage = () => {
    const [isOTP, setIsOTP] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isOTP) {
            dispatch(ToggleLogin());
            navigate('/login');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();
    };

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-6">
                <BrandLogo />
                <div className="flex flex-col justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center border-2 w-2/3 gap-4 py-5 shadow-lg rounded-xl"
                    >
                        <h1 className="m-5 text-xl font-sans font-semibold">
                            Enter the OTP Number to Register your account!
                        </h1>
                        <input
                            value={isOTP}
                            onChange={(e) => setIsOTP(e.target.value)}
                            className="shadow-lg p-3 m-2 w-72 border-2 focus:outline-none focus:border-[blueviolet] rounded-lg"
                        />
                        <button className="m-3 p-3 border-2 bg-[blueviolet] text-white text-lg font-bold rounded-xl shadow-lg">
                            Enter the OTP
                        </button>
                        <div className="flex space-x-2">
                            <p className="text-lg font-sans font-semibold">
                                Didn't get Code?
                            </p>
                            <button className="text-lg text-gray-500 hover:underline">
                                Resend
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-span-6">
                <LoginPoster />
            </div>
        </div>
    );
};

export default OTPPage;
