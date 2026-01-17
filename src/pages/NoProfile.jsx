import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaUserPlus, FaUserSlash } from 'react-icons/fa';
import logo from '../assets/SW-Logo-1.png';


const NoProfile = () => {
    
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">

            <div className="w-20 mb-8 flex items-center justify-center">
                <img src={logo} alt="SkillSwap Logo" />
            </div>

            <div className="text-center space-y-6 max-w-md">

                <div className="relative inline-block">
                    <h1 className="text-9xl font-black text-zinc-900 select-none">???</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaUserSlash className="text-5xl text-yellow-500 animate-pulse" />
                    </div>
                </div>


                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Identity Unknown</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        You haven't registered yet! <br />
                        Join the SkillSwap community and start trading skills.
                    </p>
                </div>


                <div className="flex flex-col gap-4 justify-center pt-6">

                    <Link
                        to="/auth/signup"
                        className="btn btn-neutral w-full mt-2 bg-[#fae502] hover:bg-[#e6d102] text-black border-none font-bold uppercase tracking-widest"
                    >
                        <FaUserPlus /> Sign Up Now
                    </Link>


                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/"
                            className="btn btn-outline border-zinc-700 text-white rounded-none px-8 gap-2 hover:bg-zinc-900 hover:border-zinc-500 transition-all uppercase tracking-widest text-xs"
                        >
                            <FaHome />
                        </Link>

                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-outline border-zinc-700 text-white rounded-none px-8 gap-2 hover:bg-zinc-900 hover:border-zinc-500 transition-all uppercase tracking-widest text-xs"
                        >
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoProfile;