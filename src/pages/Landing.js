import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import album from '../assets/Album_covers.png';
import albums from '../assets/albums.svg';
import more from '../assets/more.svg';
import microphone from '../assets/Vector.svg';
const Landing = () => {
  return (
    <>
    <Header />
    <Hero />
    <div className="flex px-2 md:px-20 pt-32 pb-24">
    
            <div class="flex-wrap w-full md:w-1/2 min-h-full">
            <h1 className="text-white text-5xl font-light">Discover new music</h1>
            <div className="flex justify-between w-4/5 text-center mt-6 md:ml-5">
                <div className="w-3/12 bg-inverse p-2">
                    <div className="my-auto">
                        <img src={microphone}  className="h-10 w-2/4 mx-auto" />
                        <h3 className="text-white mt-3">More</h3>
                    </div>
                </div>
                <div className="w-3/12  bg-inverse p-2">
                    <div className="my-auto">
                        <img src={albums}  className="h-10 w-2/4 mx-auto" />
                        <h3 className="text-white mt-3">Albums</h3>
                    </div>
                </div>
                <div className="w-3/12	 bg-inverse p-2">
                    <div className="my-auto">
                        <img src={more}  className="h-10 w-2/4 mx-auto" />
                        <h3 className="text-white mt-3">More</h3>
                    </div>
                </div>
            </div>
            <p className="text-white mt-6 text-2xl font-thin">By joining you can benefit by listening to the latest albums released</p>
              
            </div>
            <div className="flex-wrap w-full md:w-1/2 min-h-full relative">
                <img src={album}  className="w-7/12 mx-auto" />
            </div>
       
    </div>
    <hr className="h-1 bg-inverse border-0"  />
    </>
  );
}

export default Landing;
