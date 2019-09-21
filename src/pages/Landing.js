import React from 'react';
import Header from '../components/Header';
import girl from '../assets/landing-page-girl.png';

const Landing = () => {
  return (
    <>
    <Header />
    <div class="flex px-20">
        <div class="w-1/2 ">
            <img src={girl}  />
        </div>
        <div class="w-1/2">

        </div>
    </div>
   
    </>
  );
}

export default Landing;
