import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    // console.log(categoryNews)

    // console.log(id, data)
    useEffect(()=>{
        if(id == 0){
            setCategoryNews(data);
            return
        }
        else if(id == 1){
            const filterNews = data.filter(news=> news?.others?.is_today_pick == true)
            setCategoryNews(filterNews)
        }
        else{
            const filterNews = data.filter(news=> news.category_id == id)
            setCategoryNews(filterNews)
        }
    },[data, id])

    return (
        <div>
             <h2 className='text-xl font-semibold mb-5 mt-5'>Dragon News Home</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
            }
            </div>
        </div>
    );
};

export default CategoryNews;