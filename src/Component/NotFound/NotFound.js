import React from 'react';
import page404 from '../images/404page.jpg';
const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-[78.6vh]'>
            <div>
                    <img src={page404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;