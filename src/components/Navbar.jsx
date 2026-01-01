import React from 'react';
import logo from '../assets/SkillSwap-Logo.png'

import { FaHouse } from 'react-icons/fa6';
import { CgLogIn } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="bg-black navbar px-20 shadow-sm flex justify-between items-center">
            <div className="">
                <div className='flex justify-center items-center
                text-xl'>
                    <img className='w-15' src={logo} alt="" />
                    <p className='text-2xl font-extrabold'>Skill Swap</p>
                </div>
            </div>
            <div className='flex gap-2 md:gap-5 lg:gap-10'>
              
                <NavLink to='/' className='flex justify-center items-center gap-1.5'>
                    <FaHouse></FaHouse>
                    <p className='font-bold'>Home</p>
                </NavLink>

                <NavLink to='/login' className='flex justify-center items-center gap-1.5'>
                    
                    <CgLogIn></CgLogIn>
                    <p className='font-bold'>Login</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;