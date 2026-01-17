import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopRated = ({ skills }) => {
    return (
        <div>
            <section className="bg-transparent py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6]">
                        Top <span className='text-[#fae502]'>Rated</span> Providers
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5 mb-16">
                        Connect with our highest-rated mentors. These providers have maintained
                        near-perfect ratings from the SkillSwap community.
                    </p>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.skillId}
                                className="group flex flex-col items-center p-6 rounded-4xl  hover:bg-white/1 border border-white/1 shadow-lg hover:border-primary/10 transition"
                            >

                                <div className="avatar mb-4">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={skill.image} alt={skill.skillName} />
                                    </div>
                                </div>

                                <h3 className="text-white font-bold text-lg mb-1">{skill.providerName}</h3>
                                <p className="text-gray-400 text-sm mb-3">{skill.skillName}</p>

                                <div className='flex justify-between gap-3 md:gap-6 items-center'>

                                    <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-bold">
                                        <HiStar /> {skill.rating}
                                    </div>


                                    <Link
                                        to={`/skill-details/${skill.skillId}`}
                                        className="btn btn-primary btn-sm btn-outline rounded-full px-6 group-hover:bg-primary group-hover:text-white">
                                        View
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopRated;