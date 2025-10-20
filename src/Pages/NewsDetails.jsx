import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header';
import RightAside from '../Components/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const newsData = useLoaderData()
    // console.log(newsData)
    const {id} = useParams()
    const [news, setNews] = useState({});
    useEffect(()=>{
        const newsDetailsFind = newsData.find(singleNews=> singleNews.id == id)
        setNews(newsDetailsFind)
    },[id, newsData])
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto py-10 grid grid-cols-12 gap-5 '>
            <section className='col-span-9'>
                <h2 className='font-semibold text-xl text-primary mb-5'>Dragon News</h2>
                <NewsDetailsCard news={news}/>
            </section>
            <aside className='col-span-3'>
                <RightAside/>
            </aside>

            </main>
        </div>
    );
};

export default NewsDetails;