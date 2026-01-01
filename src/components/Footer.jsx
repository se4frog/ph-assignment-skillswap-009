import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo2 from '../assets/Skillswap-text-logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-4 gap-8">
        
        <div className="space-y-2 ">
          <div className='w-50'>
            <img src={logo2} alt="" />
          </div>
          
        </div>

        <div>
          <h3 className="font-semibold mb-2">Platform</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community Rules</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex gap-3 mt-1">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#fae502] transition-colors"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#fae502] transition-colors"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#fae502] transition-colors"><FaInstagram /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#fae502]  transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 SkillSwap. All rights reserved. <span className='italic'>#Se4frog</span>
      </div>
    </footer>
  );
};

export default Footer;
