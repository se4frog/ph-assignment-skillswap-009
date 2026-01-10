import React from 'react';
import HudaiLogo1 from '../assets/SW-Logo-1.png'
import HudaiLogo2 from '../assets/SW-Logo-201.png'

const HudaiLogo = () => {
    return (
        <div className='flex justify-between items-center'>
            

            <div className=''>
                <img src={HudaiLogo1} alt="" />
            </div>
            <div className=''>
                <img src={HudaiLogo2} alt="" />
            </div>
        
        </div>
    );
};

export default HudaiLogo;