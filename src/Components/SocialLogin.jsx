import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
         <div className='grid grid-cols-1 mt-5 gap-4'>
            <h2 className='font-semibold text-xl'>Login With</h2>
            <div className=' flex flex-col gap-3'>
                <button  className='btn w-full btn-outline btn-secondary'><FcGoogle size={24}/>Login with Google</button>
                <button  className='btn w-full btn-outline btn-primary'><FaGithub size={24}/>
Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;