import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    
    const handleToSubmit = () => {
        setName(()=> "");
        setEmail(()=> "");
        setAddress(()=> "");
        setNumber(()=> "");
        toast('Thanks for Bookings')
    }
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[500px] shadow-xl mx-auto p-6'>
                <form action="" onSubmit={(event) => event.preventDefault()}>
                    <h1 className='text-center mb-12 text-xl'>Welcome to WesTen Photography</h1>
                    <div className='mb-8'>
                        <input value={name} className='bg-stone-200 p-[5px] w-full outline-none' type="text" name="name" id="" placeholder='Name' />
                    </div>
                    <div className='mb-8'>
                        <input value={email}className='bg-stone-200 p-[5px] w-full outline-none' type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div className='mb-8'>
                        <input value={address}  className='bg-stone-200 p-[5px] w-full outline-none' type="text" name="address" id="" placeholder='Address' />
                    </div>
                    <div className='mb-8'>
                        <input value={number} className='bg-stone-200 p-[5px] w-full outline-none' type="number" name="number" placeholder='Phone Number' id="" />  
                    </div>
                    <div className='mb-2'>
                        <input onChange={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                        <label className={agree ? 'pl-2 text-blue-500 ' : 'pl-2 text-red-500 '} htmlFor="terms">Accept our terms and Condition</label>
                    </div>
                    <button disabled={!agree} onClick={handleToSubmit}
                        className='w-full bg-cyan-600 text-white py-[5px]' 
                    >Submit</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Checkout;