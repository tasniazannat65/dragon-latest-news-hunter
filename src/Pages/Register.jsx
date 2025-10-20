import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';

const Register = () => {
    const {createUser, setUser, updateUser} = useContext(AuthContext);
    const [nameError, setNameError] = useState('');

    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        if(name.length < 5){
            setNameError('Name should be more then 5 character');
            return
        }
        else{
            setNameError('')
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password)
        createUser(email, password)
        .then(result=>{
            const user= result.user
            
            updateUser({
                displayName: name,
                photoUrl: photo
            })
            .then(()=>{
                setUser({...user,displayName: name,
                photoUrl: photo })
            })
            .catch(error=>{
                console.log(error)
                setUser(user)
            })
            
            
        })
        .catch(error=>{
            console.log(error)
            
        })
        .catch(error=>{
            console.log(error)
            
        })
    }
    return (
                 <div className="hero bg-base-200 min-h-screen">
  
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-3xl font-semibold text-primary text-center">Register your account</h1>

        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label font-semibold text-xl text-primary">Your Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" required />
          {nameError && <p className='text-red-600'>{nameError}</p>}
          <label className="label font-semibold text-xl text-primary">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Enter your photo URL" required />
          <label className="label font-semibold text-xl text-primary">Email address</label>
          <input type="email" name='email' className="input" placeholder="Enter your email address" required />
          <label className="label font-semibold text-xl text-primary">Password</label>
          <input type="password" name='password' className="input" placeholder="Enter your password" required />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p className='font-semibold text-accent text-center'>Already Have An Account ? <Link to='/auth/login' className='text-[#FF8C47] hover:text-[#F75B5F] underline'>Login</Link></p>
      </div>
    </div>
  
</div>
    );
};

export default Register;