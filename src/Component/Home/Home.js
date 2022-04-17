import React from 'react';
import wedding from '../images/wedding.jpg';
import corporate from '../images/corporate.jpg';
import video from '../images/video.jpg';

const Home = () => {

  return (

            <div>
              <div>
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
                                <p>We provide best service for Bride and Groom</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src={corporate}
                                className="block w-full h-[700px]"
                                alt="Mountaintop"/>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl font-bold">Corporate Banding Photography</h5>
                                <p>our</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                 src={video}
                                className="block w-full h-[700px]"
                                alt="Woman Reading a Book"/>
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl font-bold">Videography</h5>
                                <p>Some representative placeholder content for the third slide.</p>
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
            <section className="overflow-hidden text-gray-700">
              <div className="container px-5 py-2 mx-auto my-20 lg:px-32">
                <h1 className='text-center mb-8'>This is recent work</h1>
                  <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                          </div>
                          <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                          </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                          <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                          </div>
                          <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
    );
};

export default Home;