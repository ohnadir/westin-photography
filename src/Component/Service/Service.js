import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
const Service = ({service}) => {
    const { img, name, details, Price, ratings} = service;
    const navigate = useNavigate();
    const handleGoToCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <div className='shadow-xl mx-auto   h-[410px] relative'>
                <img className='p-2' src={img} alt="" />
                <div className='pl-3'>
                    <p className='my-3'>{name}</p>
                    <p className='text-gray-600 mb-3'>{details}</p>
                    <p className='mb-1'>Price:- <span className='font-semibold'>${Price}</span></p>
                    <p className='mb-2'>Ratings:- 
                    <Rating className='text-sm'
                        initialRating={ratings}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly>
                    </Rating>
                    </p>
                </div>
                <button onClick={handleGoToCheckOut} className=' absolute bottom-0
                bg-cyan-600 w-full py-[4px] hover:bg-cyan-500
                text-white ' >Checkout</button>
            </div>
        </div>
    );
};

export default Service;