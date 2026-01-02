import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-full max-w-md shrink-0 shadow-2xl md:gap-5
            bg-white/10
    backdrop-blur-md border border-white/10">
                <h2 className='font-semibold text-2xl text-center mt-5'>Sign Up</h2>
                <form className="card-body py-5">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input w-full bg-white/1
    backdrop-blur-md border border-white/1" placeholder="Your name"
                            required />
                        {/* PhotoUrl */}
                        <label className="label">Photo</label>
                        <input name='photo' type="url" className="input w-full bg-white/1
    backdrop-blur-md border border-white/1" placeholder="Give your photo URL"
                            required />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full bg-white/1
    backdrop-blur-md border border-white/1" placeholder="Email"
                            required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full bg-white/1
    backdrop-blur-md border border-white/1" placeholder="Password"
                            required />

                        <div><a className="link link-hover text-gray-200">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4 bg-white/10
    backdrop-blur-md border border-white/10">Login</button>
                        <h3 className='text-center mt-3 font-semibold text-gray-300'>Already Have Account? <Link to='/auth/login' className='text-[#fae502] hover:link' >Login</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;  