import React from 'react';
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGroundImg from '../assets/playground.png'
import bg from '../assets/bg.png'

const QZone = () => {
    return (
          <div className='space-y-5'>
         <div className='bg-base-200 p-3'>
            <h2 className='font-semibold mb-5 text-xl'>Q-Zone</h2>
            <div className='space-y-5 flex justify-center flex-col'>
           <img src={swimmingImg} alt="" />
           <img src={classImg} alt="" />
           <img src={playGroundImg} alt="" />
            </div>
            
        </div>
        <img className='w-full' src={bg} alt="" />
       </div>
    );
};

export default QZone;