import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeServices = ({service}) => {
    const { name, img, Price, ratings, details,id } = service;
    const navigate = useNavigate();
    return (
        <div className=''>
            <div className='lg:w-[310px] md:w-[250px] sm:w-[270px] w-[250px] mx-auto gap-4 shadow-xl h-[436px] relative'>
                <img className=' p-2 rounded' src={img} alt="" />
                <div className='p-4'>
                    <p className='text-lg mb-2'>{name}</p>
                    <p className='mb-2'>{details}</p>
                    <p>Price:- <span className='font-semibold'>${Price}</span></p>
                    <p>Ratings:-
                    <Rating className='text-sm ml-2'
                        initialRating={ratings}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly>
                    </Rating></p>
                </div>
                <button onChange={()=>navigate(`/checkout/${id}`)} className='bg-cyan-600 text-white w-full py-[4px] absolute bottom-0'>Checkout</button>
            </div>
        </div>
    );
};

export default HomeServices;