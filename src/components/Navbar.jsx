import React from 'react';
import logo from '../assets/SkillSwap-Logo.png'

import { FaHouse } from 'react-icons/fa6';
import { CgLogIn } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { PiMaskHappyFill } from 'react-icons/pi';



const Navbar = () => {
    return (
        <div className="
        
        py-5 lg:px-20 px-2 flex justify-between items-center 
        sticky top-0
        ">
            <div className="">
                <div className='flex justify-center items-center
                text-xl gap-1'>
                   <div className='bg-white/10
    backdrop-blur-md  border border-white/10
    shadow-lg rounded-4xl p-2
    '>
                     <img className='w-10 transition-transform duration-700 ease-in-out hover:rotate-y-180 hover:rotate-360' src={logo} alt="" />
                   </div>
                    <p className='text-2xl font-extrabold'>SkillSwap</p>
                </div>
            </div>
            <div className='flex gap-2 md:gap-5 lg:gap-10
            bg-white/10
    backdrop-blur-md  border border-white/10
    shadow-lg rounded-4xl py-3 px-5'>

                <NavLink to='/profile' className='flex justify-center items-center gap-1.5'>
                    <PiMaskHappyFill></PiMaskHappyFill>
                    <p className='font-bold '>Profile</p>
                </NavLink>

                <NavLink to='/' className='flex justify-center items-center gap-1.5'>
                    <FaHouse></FaHouse>
                    <p className='font-bold '>Home</p>
                </NavLink>

                <NavLink to='/auth/login' className='flex justify-center items-center gap-1.5'>

                    <CgLogIn></CgLogIn>
                    <p className='font-bold'>Login</p>
                </NavLink>
                <NavLink to='/auth/signup' className=' justify-center items-center gap-1.5
                hidden lg:flex'>

                    <p className='font-bold'>Sign Up</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;