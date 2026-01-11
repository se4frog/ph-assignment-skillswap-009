import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowLeft, FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';
import logo from '../assets/SW-Logo-1.png'
import { FaBackward, FaBackwardStep } from 'react-icons/fa6';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">


            <div className="w-20 flex items-center justify-center">
                <img src={logo} alt="" />
            </div>

            <div className="text-center space-y-6 max-w-md">
                <div className="relative inline-block">
                    <h1 className="text-9xl font-black text-zinc-900 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaExclamationTriangle className="text-5xl text-yellow-500 animate-pulse" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Lost in the Swap?</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We couldn't find the skill or page you were looking for.
                    </p>
                </div>

                {/* 3. ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link
                        to="/"
                        className="btn btn-white rounded-none text-white px-8 gap-2 border-none uppercase tracking-widest text-xs font-bold"
                    >
                        <FaHome />
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline border-zinc-700 text-white rounded-none px-8 gap-2 hover:bg-zinc-900 hover:border-zinc-500 transition-all uppercase tracking-widest text-xs"
                    >
                        <FaArrowLeft></FaArrowLeft>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;