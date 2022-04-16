import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleLogIn = () => {
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='flex justify-center items-center h-[93vh]'>
            <div className='w-[500px] shadow-xl p-4'>
                <form onSubmit={(event)=> event.preventDefault()}>
                    <h2 className='text-center mb-8'>Log in</h2>
                    <div className='mb-8'>
                        <input onChange={handleEmail} className='bg-stone-200 p-[5px] w-full outline-none' type="email" name="email" placeholder='Enter Your Email' id="" />
                    </div>
                    <div className='mb-8'>
                        <input onChange={handlePassword} className='bg-stone-200 p-[5px] w-full outline-none' type="password" name="password" placeholder='Enter Password' id="" />
                    </div>
                    <button onClick={handleLogIn} className='bg-cyan-600 w-full text-white py-[5px] rounded'>Log in</button>
                    <div className='flex items-center justify-between my-8'>
                        <p>Create an Account <Link className='text-red-600' to='/signup'>Signup</Link></p>
                        <span><Link className='text-red-600' to='/forgot'>Forgot Password ?</Link></span>
                    </div>
                    <button className='
                    border border-cyan-600  w-full px-8 py-[5px]
                     text-black rounded
                     flex items-center justify-center
                      justify-between'><FcGoogle className='text-3xl' /> Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;