import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
        if (password < 7) {
            setPasswordError('Password must be 7 Character');
        }else if (password > 7 ) {
            setPasswordError('');
        }
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
            
    }
    if (user) {
        navigate('/home')
    }
    const handleSignUp = () => {
        if (confirmPassword !== password) {
            setError('Password Mismatch');
        } else {
            createUserWithEmailAndPassword(email, password);
        }
    }
    const handleGoogleSingIn = () => {
        signInWithGoogle();
    }
    return (
        <div className='flex justify-center items-center h-[78.5vh]'>
            <div className='w-[500px] shadow-xl p-4'>
                <form onSubmit={(event)=> event.preventDefault()}>
                    <h2 className='text-center mb-8'>Create an Account</h2>
                    <div className='mb-8'>
                        <input required onChange={handleEmail} className='bg-stone-200 p-[5px] w-full outline-none' type="email" name="email" placeholder='Email' id="" />
                    </div>
                    <div className='mb-8'>
                        <input required onChange={handlePassword} type="password" className='bg-stone-200 p-[5px] w-full outline-none' name="password" placeholder='Password' id="" />
                        {passwordError && <p className='text-red-600 text-sm mt-1'>{passwordError}</p>}
                    </div>
                    <div className='mb-8'>
                        <input required onChange={handleConfirmPassword} className='bg-stone-200 p-[5px] w-full outline-none' type="password" name="password" placeholder='Confirm Password' id="" />
                        {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
                    </div>
                    <div className='mb-2'>
                        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                        <label className={agree ? 'pl-2 text-blue-500 ' : 'pl-2 text-red-500 '} htmlFor="terms">Accept our terms and Condition</label>
                    </div>
                    <button  disabled={!agree}
                        onClick={handleSignUp}
                        className='bg-cyan-600 
                        w-full text-white py-[5px] rounded'>Sign Up</button>
                    <div className='flex items-center justify-between my-8'>
                        <p>Already have an Account <Link className='text-red-600' to='/login'>login</Link></p>
                    </div>
                    <button onClick={handleGoogleSingIn}
                        className='
                            border border-cyan-600  w-full px-8 py-[5px]
                          text-black rounded
                            flex items-center justify-center
                            justify-between'>
                        <FcGoogle className='text-3xl' /> Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;