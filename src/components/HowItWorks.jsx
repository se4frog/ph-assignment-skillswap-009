import React from 'react';
import { steps } from '../data/howitworks';

const HowItWorks = () => {
 
  

  return (
    <section className=" py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 
          "><span className='text-[#fae502]'>How</span> It Works</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get started with SkillSwap in five easy simple steps.
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`group bg-transparent border border-gray-800 p-8 rounded-4xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full
               `}
            >
    
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-blue-500 p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {step.title}
                </h3>
              </div>


              <div className="grow">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="border-t border-gray-800 pt-4 mt-auto">
                  <p className="text-gray-500 text-xs italic">
                    {step.subText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;