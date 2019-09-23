import React from 'react';
import girl from '../assets/landing-page-girl.png';

const Hero = () => {
  return (
    <>
    <div className="flex px-2 md:px-20 pt-10 hero">

        <div className="hidden md:block flex-wrap sm:flex-shrink-0 w-full md:w-1/2 min-h-full self-end girl">
            <img src={girl} className="w-7/12 " />
        </div>
        <div class="flex-wrap flex-shrink-0  w-full md:w-1/2 md:pt-20 pb-6">
            <div className="my-auto text-center md:text-left ">
                <h1 className="text-white text-3xl md:text-3xl lg:text-5xl">Feel the music</h1>
                <p className="text-white text-lg mt-3  md:text-lg font-light md:font-normal">Stream over 20 thousand songs with one click</p>
                <button className="bg-secondary hover:bg-pink text-white font-bold font-poppins py-2 px-4 rounded mt-10 mb-4">Join Now</button>
            </div>
        </div>

        <div className="circle-1 bg-eclipes-pink"></div>
        <div className="circle-2 bg-eclipes-blue  hidden md:block"></div>
        <div className="circle-3 bg-eclipes-blue"></div>
       
    </div>
    <hr className="h-1 bg-inverse border-0"  />
    </>
  );
}

export default Hero;
