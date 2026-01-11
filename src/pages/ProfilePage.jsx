import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEdit } from 'react-icons/fa';

const ProfilePage = () => {
  
  const user = {
    name: "Hunter Norton",
    email: "hunter.dev@skillswap.com",
    image: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    bio: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus."
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-white">Profile</h1>
          <p className="text-xl text-gray-400 font-medium italic">
            I'm a creative PHP webdeveloper
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Left: About Me Section */}
          <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block md:block">
              About me
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {user.bio}
            </p>
            <p className="text-xs text-gray-500 italic">Image by Freepik</p>
          </div>

          {/* Center: Profile Image with Glow/Ring */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-zinc-800 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-zinc-900 shadow-2xl">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right: Details Section */}
          <div className="order-3 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block md:block">
              Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-black uppercase text-xs tracking-widest text-gray-500">Name:</p>
                <p className="text-gray-200">{user.name}</p>
              </div>
              
              <div>
                <p className="font-black uppercase text-xs tracking-widest text-gray-500">Email:</p>
                <p className="text-gray-200 wrap-break-word">{user.email}</p>
              </div>

              <div>
                <p className="font-black uppercase text-xs tracking-widest text-gray-500">Location:</p>
                <p className="text-gray-200">'s-Hertogenbosch, The Netherlands, Earth</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-xl py-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
            </div>

            {/* Update Profile Button - Inverted for Dark Theme */}
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