import React from 'react';
import userImg from '../assets/user.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
           <div className='flex justify-between items-center'>
            <div className='font-semibold text-xl text-accent'></div>
            <div className='nav flex gap-5 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-3'>
                <img className='w-12 rounded-full' src={userImg} alt="" />
                
                     <button  className='btn btn-primary text-base-100 px-10 text-xl font-semibold'>Login</button> 

                
            </div>
        </div>
    );
};

export default Navbar;