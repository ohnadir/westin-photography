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
                    <p> In This technology eve  I know very well how must the a student  suffer  for want of a good doctor. Even, many villagers die premature death for want of only a good doctor. My grandmother also died a premature death for the same reason. These incidents have shocked me. So, I want to be a good doctor. After being a doctor, I will live in my village and serve the villagers.
                    In our country, to be a doctor is not easy at all. At first, I have to pass the SSC and the HSC with good result from science group. Then to get admission in MBBS course, I have to compete with all the good students. Therefore, I am working very hard with sincerity from now. I am confident of fulfilling my aim
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;