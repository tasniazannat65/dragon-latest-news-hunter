import React, {  useContext } from 'react';
import userImg from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext)
    const handleSignOut = ()=>{
        signOutUser()
        .then(()=>{
       toast.success('👋You Logged Out Successfully',{
        position: 'top-center',
  autoClose: 2000,
  theme: 'colored',
       })
    
       
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
           <div className='flex justify-between items-center'>
            <div className='font-semibold text-xl text-accent'>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-3'>
                <img className='w-12 rounded-full' src={`${user ? user?.
photoUrl : userImg}`} alt="" />
                
                {
                    user ? <button onClick={handleSignOut}  className='btn btn-primary text-base-100 px-10 text-xl font-semibold'>LogOut</button> : <Link to='/auth/login'  className='btn btn-primary text-base-100 px-10 text-xl font-semibold'>Login</Link> 


                }

                
            </div>
        </div>
    );
};

export default Navbar;