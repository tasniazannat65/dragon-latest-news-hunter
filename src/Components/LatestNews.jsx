import React from 'react';
import Marquee from 'react-fast-marquee';
import newsData from '../../public/news.json'

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary text-xl font-medium px-3 py-2'>Latest</p>
            <Marquee className='flex gap-10 text-primary text-lg font-medium' pauseOnHover={true} speed={60}
            gradient gradientColor={[240, 240, 240]} gradientWidth={80}
            >
                {
                    newsData.map(news=>(
                        <p key={news.id} className='hover:text-secondary transition-all duration-300 cursor-pointer'>{news.title}
                        <span className='text-accent mx-3'>|</span>
                        </p>
                    ))
                }
            </Marquee>
           
        </div>
    );
};

export default LatestNews;