import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white bg-[#f1f1f1]">
                <div className=" pt-9">
                    <div className="flex justify-center items-center mb-8 gap-8">
                        <FaFacebookF className='text-gray-800 cursor-pointer'/>
                        <FaTwitter className='text-gray-800 cursor-pointer' />
                        <BsInstagram className='text-gray-800 cursor-pointer' />
                        <BsGoogle className='text-gray-800 cursor-pointer' />
                        <FaLinkedinIn className='text-gray-800 cursor-pointer'/>
                    </div>
                    
                </div>
                <div className="text-center text-gray-700 p-4">
                    © 2022 Copyright: WesTen Photography
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;