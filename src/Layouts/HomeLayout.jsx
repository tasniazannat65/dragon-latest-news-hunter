import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import LatestNews from '../Components/LatestNews';
import LeftAside from '../Components/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../Components/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <section>
                    <Header/>
                </section>
                <section className='w-11/12 mx-auto py-5'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto py-5'>
                    <Navbar/>
                </nav>

            </header>
            <main className='w-11/12 mx-auto py-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside/>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside/>
                </aside>

            </main>
            
        </div>
    );
};

export default HomeLayout;