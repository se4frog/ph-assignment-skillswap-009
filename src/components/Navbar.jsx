import React, { use } from 'react';
import logo from '../assets/SkillSwap-Logo.png'
import logo2 from '../assets/SW-Logo-201.png'

import { FaHouse, FaRegUser, FaUserPlus } from 'react-icons/fa6';
import { PiMaskHappyFill } from 'react-icons/pi';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import MyLink from './MyLink';
import { BiLogOut } from 'react-icons/bi';
import { CgLogIn } from 'react-icons/cg';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';




const Navbar = () => {

    const { user, auth } = use(AuthContext)

    const handleLogout =()=>{
        // console.log("user is trying to log out")
        signOut(auth).then(()=>{
            toast('You are Logged Out!! 😓')
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    return (
        <div className="py-5 lg:px-20 px-2 flex justify-between items-center sticky top-0 z-50">

            <div className='flex justify-center items-center
                text-xl gap-1'>
                <div className='bg-white/10 backdrop-blur-md  border border-white/10 shadow-lg rounded-4xl p-2'>
                    <img className="w-10 transition-transform duration-700 ease-in-out  hover:rotate-360 hover:rotate-y-180
                    animate__animated animate__pulse animate__infinite" src={logo} alt="" />
                </div>
                <div className='w-20'>
                    <img src={logo2} alt="" />
                </div>
            </div>

            <div className='flex gap-2 md:gap-5 lg:gap-10
            bg-white/10 backdrop-blur-md  border border-white/10 shadow-lg rounded-4xl py-3 px-5'>

                <MyLink to={'/profile'}>
                    {user ?
                        <div>
                            <div data-tooltip-id="profile-tooltip"
                                className="cursor-pointer">
                                {user?.photoURL ? 
                                   <div className='w-10 h-10'>
                                    <img className='rounded-full w-full h-full object-cover border-2 hover:scale-110 hover:ease-in-out' src={user?.photoURL} alt="" />
                                    </div> :
                                    <div className='hover:scale-110 hover:ease-in-out rounded-full p-1 border-2'>
                                        <FaRegUser></FaRegUser>
                                    </div>
                                }
                            </div>
                            <Tooltip
                                id="profile-tooltip"
                                place="bottom"
                                className="bg-white/20 opacity-100 rounded-md border-2 border-white/1 px-3 py-2 shadow-xl z-100 mt-2"
                                noArrow={true}
                            >
                                <div className="flex flex-col text-left">
                                    <span className="font-semibold text-sm text-[#fae502]">
                                        SwapSkill
                                    </span>
                                    <span className="text-zinc-300 text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="text-zinc-400 text-xs">
                                        {user?.email}
                                    </span>
                                </div>
                            </Tooltip>
                        </div>
                        : <PiMaskHappyFill></PiMaskHappyFill>}
                    <p className='font-bold hidden md:block '>Profile</p>
                </MyLink>

                <MyLink to='/' >
                    <FaHouse></FaHouse>
                    <p className='font-bold '>Home</p>
                </MyLink>
                {user ?
                    <button onClick={handleLogout} className='flex justify-center items-center gap-1.5 hover:text-red-500 hover:scale-105  hover:cursor-pointer
                    hover:bg-transparent'>
                        <BiLogOut />
                        <p className='font-bold'>Log Out</p>
                    </button>
                    :
                    <div className='flex justify-between items-center gap-2 md:gap-5 lg:gap-10'>

                        <MyLink to='/auth/login'>
                            <CgLogIn></CgLogIn>
                            <p className='font-bold'>Login</p>
                        </MyLink>
                        <MyLink to='/auth/signup' className='
                hidden lg:flex'>
                            <FaUserPlus />
                            <p className='font-bold'>Sign Up</p>
                        </MyLink>
                    </div>

                }




            </div>
        </div>
    );
};

export default Navbar;