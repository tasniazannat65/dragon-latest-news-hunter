import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
          <div className=' card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 p-4 space-y-5'>
            <img className='w-full object-cover overflow-hidden rounded-sm' src={news.thumbnail_url} alt="" />
            <h2 className='font-bold text-2xl text-primary'>{news.title}</h2>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary w-[323px] px-5 py-6 mb-3  font-medium text-xl'><FaArrowLeft/>All news in this category</Link>
            
        </div>
    );
};

export default NewsDetailsCard;