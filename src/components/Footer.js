import React from 'react';

import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';


const Footer = () => {
    return (
        <>
        <div className="bg-inverse pt-3 pb-4 px-4 md:px-20 flex">

        <ul className="inline-flex">
           
           <li>
             <a className="px-4 text-white" href="#">About</a>
           </li>
           <li>
             <a className="px-4 text-white" href="#">Contact</a>
           </li>
         </ul>

         <ul className="inline-flex ml-auto">
           
           <li>
             <a className="px-4 text-white flex" href="#"><img src={twitter} className="w-4" /><span className="pl-2">Twitter</span> </a>
           </li>
           <li>
             <a className="px-4 text-white flex" href="#"><img src={facebook} className="w-3" /><span className="pl-2">Facebook</span></a>
           </li>
         </ul>

        </div>
     </>
    );
}

export default Footer;