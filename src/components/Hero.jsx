import React from 'react';
import logo1 from '../../src/assets/SW-Logo-1.png'


const Hero = () => {

    return (
        <div>
            <section className="min-h-[50vh] flex items-center justify-center overflow-hidden bg-transparent text-slate-200">


                <div className="absolute inset-0 bg-transparent"></div>


                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black"></div>


                <div className="relative z-10 text-center px-4 max-w-3xl">


                    <div className="flex flex-col items-center gap-4">
                    
                            <img
                                src={logo1}
                                alt="SkillSwap Logo"
                                className={`w-40 rounded-full`}
                            />

                        
                    
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                            SkillSwap
                        </h1>
                    </div>


                    <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
                        Learn, teach, and exchange skills with people around you.
                    </p>


                    <p className="mt-4 text-sm text-slate-400">
                        Empowering local communities through shared knowledge
                    </p>


                    <div className="mt-8 flex justify-center">
                        <button className="rounded-full bg-[#fae502] px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-[#fae502]  hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                            Explore Skills
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;