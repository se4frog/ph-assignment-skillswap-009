import React, { use } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEdit } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import NoProfile from './NoProfile';

const ProfilePage = () => {
  
  const {user} = use(AuthContext);

if (!user) return <NoProfile></NoProfile>;
else return (
    <div className="min-h-screen bg-black text-white font-sans py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
 
        <div className="text-center mb-16 space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-white">{user.displayName}</h1>
          <p className="text-xl text-gray-400 font-medium italic">
            {user.onelineBio}
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
          <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block md:block">
              About me
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {user.bio}
            </p>
            
          </div>

         
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
            
              <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-zinc-800 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-zinc-900 shadow-2xl">
                <img 
                  src={user.photoURL} 
                  alt={user.displayName} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

       
          <div className="order-3 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block md:block">
              Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-black uppercase text-xs tracking-widest text-gray-500">Name:</p>
                <p className="text-gray-200">{user.displayName}</p>
              </div>
              
              <div>
                <p className="font-black uppercase text-xs tracking-widest text-gray-500">Email:</p>
                <p className="text-gray-200 wrap-break-word">{user.email}</p>
              </div>

              
            </div>

         

            <div className="pt-4">
              <button className="btn btn-outline border-zinc-700 text-white rounded-none px-8 gap-2 hover:bg-[#fae502] hover:text-black transition-all uppercase tracking-widest text-xs">
                <FaEdit /> Update Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;