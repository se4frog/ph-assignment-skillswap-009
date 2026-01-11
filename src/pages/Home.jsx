import React from 'react';
import Hero from '../components/Hero';
import HeroSlider from '../components/HeroSlider';
import InsideContainer from '../components/InsideContainer';
import PopularSkillsSlider from '../components/PopularSkillsSlider';
import { useLoaderData } from 'react-router-dom';
import TopRated from '../components/TopRated';
import HudaiLogo from '../components/HudaiLogo';
import HowItWorks from '../components/HowItWorks';
import AboutSkillSwap from '../components/AboutSkillSwap';


const Home = () => {

    const popSkills = useLoaderData();
    const topRatedSkills = popSkills.filter(skill => skill.rating >= 4.9);



    return (
        <div>
            <InsideContainer>
                <Hero></Hero>
                <HeroSlider></HeroSlider>
            </InsideContainer>

          <div className='px-10 md:px-15 lg:px-20'>
              
            <PopularSkillsSlider popSkills={popSkills}></PopularSkillsSlider>
          </div>

            <InsideContainer>
                <div className='flex justify-center items-center'>
                    <HudaiLogo></HudaiLogo>
                </div>
                <div className='px-4 md:px-14 mx-auto'>
                    <TopRated skills={topRatedSkills}></TopRated>
                </div>
                <HowItWorks></HowItWorks>
                <AboutSkillSwap></AboutSkillSwap>
            </InsideContainer>
        </div>
    );
};

export default Home;