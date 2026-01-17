import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const auth = getAuth();


    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
            
        }
    }, [location.state]);


    const handleReset = (e) => {
        e.preventDefault();
        
        sendPasswordResetEmail(auth, email)
            .then(() => {
              
                alert("Reset link sent! Redirecting to Gmail...");
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Restore Password</h2>
                
                <form onSubmit={handleReset} className="space-y-6">
                    <div className="form-control">
                        <label className="label text-xs uppercase tracking-widest mb-1 ml-1 text-gray-400">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your-email@example.com"
                            className="input w-full bg-white/10 border border-white/20 text-white focus:border-[#fae502] focus:outline-none h-12 px-4"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-neutral w-full mt-2 bg-[#fae502] hover:bg-[#e6d102] text-black border-none font-bold uppercase tracking-widest"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;