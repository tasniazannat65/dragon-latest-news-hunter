import React from 'react';
import facebookImg from '../assets/fb.png'
import twitterImg from '../assets/twitter.png'
import instagramImg from '../assets/instagram.png'

const FindUs = () => {
    return (
       <div>
            <h2 className='font-semibold text-xl mb-5'>Find Us On</h2>
            
                <div className="join join-vertical w-full">
  <button className="btn bg-base-100 text-accent font-medium justify-start join-item px-3 py-8">
    <span className='bg-base-200 rounded-full p-2'><img src={facebookImg} alt="" /></span>
    Facebook</button>
  <button className="btn bg-base-100 text-accent font-medium justify-start join-item px-3 py-8">
    <span className='bg-base-200 rounded-full p-2'><img src={twitterImg} alt="" /></span>
    Twitter</button>
  <button className="btn bg-base-100 text-accent font-medium justify-start join-item px-3 py-8">
    <span className='bg-base-200 rounded-full p-2'><img src={instagramImg} alt="" /></span>
    Instagram</button>
</div>
            
        </div>
    );
};

export default FindUs;