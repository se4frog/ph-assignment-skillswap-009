import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import "swiper/css";




const PopularSkillsSlider = ({ popSkills }) => {
    return (
        <section className="bg-transparent py-10 text-slate-200">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white ">Popular <span className='text-[#fae502]'>Skills</span></h2>
                <p className="text-slate-300 text-xl mt-2 font-extralight ">Learn from the best in our community</p>
            </div>

            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView="auto"
                spaceBetween={30}
                freeMode={true}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className="px-6"
            >
                {popSkills.map((skill) => (
                    <SwiperSlide
                        key={skill.skillId}
                        className="w-100! md:w-80">
                        <div className="group h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-400/50">

                         
                            <div className="h-100 w-auto overflow-hidden">
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-white line-clamp-1">
                                        {skill.skillName}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <FaStar size={14} />
                                        <span className="text-sm font-medium text-slate-200">{skill.rating}</span>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mt-1">by {skill.providerName}</p>

                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-2xl font-extrabold text-cyan-400">
                                        ${skill.price}<span className="text-xs text-slate-500 font-normal">/hr</span>
                                    </p>

                                    <Link
                                        to={`/skill-details/${skill.skillId}`}
                                        className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PopularSkillsSlider;