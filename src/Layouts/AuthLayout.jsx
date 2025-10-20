import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


const AuthLayout = () => {
    return (
         <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 sticky top-0 h-fit'>
                <Navbar/>
            </header>
            <main className='w-11/12 mx-auto py-5'>
          <Outlet/>
            </main>

            <ToastContainer/>



          
        </div>
    );
};

export default AuthLayout;