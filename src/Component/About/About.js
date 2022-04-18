import React from 'react';
import phoneOfMine from '../images/Photo of nadir.JPG';
const About = () => {
    return (
        <div className='flex justify-center items-center h-[78.6vh] mx-auto'>
            <div className='w-[500px] shadow-xl p-4'>
                <div className='flex justify-center mb-8'>
                    <img className='w-[250px] ' src={phoneOfMine} alt=""/>  
                </div>
                <div>
                    <p> In This technology eve, I know very well how must the student build carrier. That's why I decided to be a developer and was admitted to the Programing Hero institute. Last 4 months, I hard work for archive my goal. In my Learning journey, I learn how to become an as best developer and grow a sorted carrier as a developer.  In the next few months, I will work hard to make myself perfect for the interview as a junior web developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;