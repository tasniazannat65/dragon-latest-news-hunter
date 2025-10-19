import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
         <div className='flex justify-center flex-col items-center gap-3 mt-5'>
            <img src={logo} alt="" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-accent text-xl'>{format(new Date(), 'EEEE, MMMM dd, yyyy' )}</p>
        </div>
    );
};

export default Header;