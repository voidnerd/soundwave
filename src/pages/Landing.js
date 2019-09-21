import React from 'react';
import Header from '../components/Header';
import girl from '../assets/landing-page-girl.png';

const Landing = () => {
  return (
    <>
    <Header />
    <div class="flex px-2 md:px-20 pt-10">
        <div class="flex-wrap w-full md:w-1/2 min-h-full self-end">
            <img src={girl} className="w-7/12" />
        </div>
        <div class="flex-wrap w-full md:w-1/2 min-h-full pt-20">
            <div className="m-auto">
                <h1 className="text-white text-6xl">Feel the music</h1>
                <p className="text-white text-2xl font-normal">Stream over 20 thousand songs with one click</p>
                <button className="bg-secondary hover:bg-inverse text-white font-bold font-poppins py-2 px-4 rounded mt-10">Join Now</button>
            </div>
        </div>
    </div>
    <hr className="h-1 bg-inverse border-0"  />
   
    </>
  );
}

export default Landing;
