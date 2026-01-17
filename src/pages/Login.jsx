import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate()

    const { setUser, logIn, googleLogin } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        logIn(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                setError("")
                navigate(`${location.state ? location.state : '/'}`)

                form.reset();
            })
            .catch((error) => {
                // console.log(error.code)
                setError(error.message)
            })
    };

    const haddleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                // console.error("Google Sign-In Error:", error.message);
                setError(error.message)
            });

    }


    const inputClass = "input w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#fae502]";

    return (
        <div className='flex justify-center items-center min-h-screen bg-black px-4'>
            <div className="card w-full max-w-md shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white">
                <div className="card-body py-10">
                    <div className="text-center mb-6">
                        <h2 className='font-bold text-3xl tracking-tight'>Login</h2>

                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    className={inputClass}
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                           <div className='flex justify-between'>
                             <label className="label py-1 text-xs uppercase tracking-widest text-gray-400" htmlFor="password">
                                Password
                            </label>
                            <a href="#" className="text-xs text-[#fae502] hover:underline mb-1">Forgot Password?</a>
                           </div>
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

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-xs italic">{error}</p>}

                        {/* Submit Button */}
                        <button type='submit' className="btn btn-neutral w-full mt-2 bg-[#fae502] hover:bg-[#e6d102] text-black border-none font-bold uppercase tracking-widest">
                            Login
                        </button>

                        <div className="divider before:bg-white/10 after:bg-white/10 text-gray-500 text-xs">OR</div>


                        <button onClick={haddleGoogleLogin} type="button" className="btn btn-outline w-full border-white/20 text-white hover:bg-white/10 gap-2 font-medium">
                            <FaGoogle className="text-red-500" /> Login with Google
                        </button>

                        <h3 className='text-center mt-6 font-medium text-gray-400'>
                            Don't Have an Account?
                            <Link to='/auth/signup' className='text-[#fae502] hover:underline ml-1 font-bold'>Sign Up</Link>
                        </h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;