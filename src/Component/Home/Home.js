import React from 'react';
import wedding from '../images/wedding.jpg';
import corporate from '../images/corporate.jpg';
import video from '../images/video.jpg';
import model from '../images/model.jpg';
import corporate2 from '../images/corporate-2.jpg';
import wedding2 from '../images/wedding (2).jpg';
import product from '../images/products.jpg';
import product2 from '../images/products2.jpg';
import editing from '../images/editing.jpg';
import useServices from '../Hooks/useServices';
import HomeServices from '../HomeServices/HomeServices';
const Home = () => {
  const [services] = useServices();
  return (

            <div >
              <div>
              {/* Carousel section */}
                <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-fade carousel-dark relative"
                    data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1">
                        </button>
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1">
                        </button>
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src={wedding}
                                className="block w-full h-[700px]"
                                alt="Motorbike Smoke"/>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl font-bold">Wedding Photography</h5>
                                <p>We provide best Photography service for Bride and Groom</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src={corporate}
                                className="block w-full h-[700px]"
                                alt="Mountaintop"/>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl font-bold">Corporate Banding Photography</h5>
                                <p>In This technology eve corporate branding is most important for Business </p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                 src={video}
                                className="block w-full h-[700px]"
                                alt="Woman Reading a Book"/>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl font-bold">Videography</h5>
                                <p>Wedding, Events or others memorable programs is most important for life if you want save your memory join us</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev">
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next">
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                    </button>
                </div>
              </div>
              {/* service section */}
              <div className='lg:max-w-7xl md:max-w-3xl sm:max-w-xl mx-auto mt-20'>
                <h1 className='text-center font-bold text-2xl mb-8'>Best Services</h1>
                <div  className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8'>
                    {
                     services.slice(0, 4).map(service => <HomeServices
                       key={service.id}
                       service={service}
                    ></HomeServices>)
                    }
                  </div>
                    <div className='flex justify-center mt-8'><button className='bg-[orange] w-[200px] rounded py-[4px] text-white'>Explore Services</button></div>
              </div>
            {/* extra section */}
            <section className=" overflow-hidden text-gray-700">
              <div className="container px-5 py-2 mx-auto my-20 lg:px-32">
                <h1 className='text-center mb-8 font-bold text-2xl'>Recent Clicks</h1>
                  <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={model} />
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={product} />
                          </div>
                          <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={corporate2} />
                          </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                          <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={wedding2} />
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={editing}/>
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src={product2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
    );
};

export default Home;