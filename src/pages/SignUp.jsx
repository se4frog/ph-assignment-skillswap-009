import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const { createUser, setUser } = use(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }


        // const user = { name, photo, email, password }
        // console.log(user)

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                setUser(user)
                setError("")

                // form.reset();
            })
            .catch((error) => {
                console.log(error.code)
                setError(error.message)
            })
    };

    const inputClass = "input w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fae502]";

    return (
        <div className='flex justify-center items-center min-h-screen bg-black px-4'>
            <div className="card w-full max-w-md shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white">
                <div className="card-body py-8">
                    <h2 className='font-bold text-3xl text-center mb-6 tracking-tight'>Create Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="name">Name</label>
                            <input id="name" name='name' type="text" className={inputClass} placeholder="Enter Your Name" required />
                        </div>

                        {/* PhotoUrl */}
                        <div className="form-control">
                            <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="photo">Photo URL</label>
                            <input id="photo" name='photo' type="url" className={inputClass} placeholder="Give your photo URL" required />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="email">Email</label>
                            <input id="email" name='email' type="email" className={inputClass} placeholder="email@example.com" required />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name='password'

                                    type={showPassword ? "text" : "password"}
                                    className={inputClass}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#fae502] transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message Display */}
                        {error && <p className="text-red-500 text-sm font-medium mt-2">{error}</p>}

                        <button type='submit' className="btn btn-neutral w-full mt-6 bg-[#fae502] hover:bg-[#e6d102] text-black border-none font-bold uppercase tracking-widest">
                            Sign Up
                        </button>

                        <h3 className='text-center mt-4 font-medium text-gray-400'>
                            Already Have an Account? <Link to='/auth/login' className='text-[#fae502] hover:underline ml-1'>Login</Link>
                        </h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;