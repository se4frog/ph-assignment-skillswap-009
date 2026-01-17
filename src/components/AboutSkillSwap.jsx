import React, { use } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const AboutSkillSwap = () => {

    const { user } = use(AuthContext)

    return (
        <section className="bg-black text-white py-20 ">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className='text-[#fae502]'>Skill</span>Swap</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We believe that every student has something valuable to teach.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 items-center">

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold">Every Student Can Teach</h3>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                You don't need to be an expert to help others learn. Whether you're good at explaining algebra, know guitar basics, or can code simple programs - your knowledge is valuable.
                            </p>
                            <p>
                                Teaching others strengthens your own understanding while building confidence and leadership skills. Join thousands of students who are both learning and teaching on our platform.
                            </p>
                        </div>


                        <Link to='/auth/login' className={`rounded-md btn bg-[#fae502] px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] 
                            ${user ? 'hidden' : ''}`}>
                            Join Our Community <span className='font-extrabold text-lg'>&gt;</span>
                        </Link>


                    </div>


                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-sm bg-[#0f172a] border border-cyan-500/30 rounded-3xl p-12 text-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                            <div className="flex flex-col items-center 
              group">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-24 h-24 text-cyan-400 mb-6 
                  group-hover:scale-110 transition-transform duration-500"
                                >
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 14.254a8.287 8.287 0 011.308 5.135 9.687 9.687 0 001.764-.44l.115-.04a.563.563 0 00.373-.487l.01-.121a3.75 3.75 0 00-3.57-4.047z" />
                                </svg>

                                <div className="text-7xl font-bold text-[#fae502] mb-2">71+</div>
                                <div className="text-xl font-medium text-cyan-400">Student Teachers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkillSwap;