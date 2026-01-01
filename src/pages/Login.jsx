import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
         <div className='flex justify-center items-center min-h-screen bg-black'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h2 className='font-semibold t ext-2xl text-center mt-5'>Login your Account</h2>
                <form className="card-body py-5">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email"
                            required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password"
                            required />

                        <div><a className="link link-hover text-gray-200">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                        <h3 className='text-center mt-3 font-semibold text-gray-300'>Don't Have Account? <Link to='/auth/signup' className='text-[#fae502] hover:link' >Sign Up</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;               