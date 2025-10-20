import React, {  useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {signInUser, resetForgetPassword} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError]= useState('');
    const emailRef = useRef();
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            e.target.reset()
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch(error=>{
            // console.log(error)
            setError(error.code)
        })
    }
    const handleForgetPassword =()=>{
        const email = emailRef.current?.value;
        // console.log(email)
        if(!email){
            setError('⚠️Please enter your email first to reset password');
            return;
        }
        else{
            setError('')
        }
        resetForgetPassword(email)
        .then(()=>{
            toast.error('📩Please check your email first to reset password',{
                 position: 'top-center',
        autoClose: 3000,
        theme: 'colored'
            })
        
        })
        .catch(error=>{
            // console.log(error)
            setError(error)
        })
    }
    return (
             <div className="hero bg-base-200 min-h-screen">
  
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-3xl font-semibold text-primary text-center">Login your account</h1>

        <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
          <label className="label font-semibold text-xl text-primary">Email address</label>
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Enter your email address" required/>
          <label className="label font-semibold text-xl text-primary">Password</label>
          <input type="password" name='password' className="input" placeholder="Enter your password" required />
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-600'>{error}</p>
          }
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p className='font-semibold text-accent text-center'>Dont’t Have An Account ? <Link to='/auth/register' className='text-[#FF8C47] hover:text-[#F75B5F] underline'>Register</Link></p>
      </div>
    </div>
  
</div>
    );
};

export default Login;