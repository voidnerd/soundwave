import React, { useState } from "react";



const Header = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  return (
  <nav className="flex items-center justify-between flex-wrap px-3 md:px-20 pt-1">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28.5" stroke="url(#paint0_linear)" stroke-width="3" stroke-linecap="round"/>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="18" width="45" height="23">
          <line x1="9.5" y1="26.5" x2="9.5" y2="33.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <line x1="14.5" y1="26.5" x2="14.5" y2="33.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <line x1="20.7516" y1="24.7516" x2="20.7516" y2="36.2484" stroke="black" stroke-width="3.50325" stroke-linecap="round"/>
          <line x1="28.1213" y1="21.1213" x2="28.1213" y2="38.8787" stroke="black" stroke-width="4.24264" stroke-linecap="round"/>
          <path d="M35 21V38.7574" stroke="black" stroke-width="4.24264" stroke-linecap="round"/>
          <line x1="41.1213" y1="25.1213" x2="41.1213" y2="35.8787" stroke="black" stroke-width="4.24264" stroke-linecap="round"/>
          <line x1="46.4302" y1="26.4302" x2="46.4302" y2="33.5698" stroke="black" stroke-width="2.86039" stroke-linecap="round"/>
          <line x1="51.5" y1="26.5" x2="51.5" y2="33.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
          </mask>
          <g mask="url(#mask0)">
          <rect x="8" y="17" width="45" height="24" fill="url(#paint1_linear)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1762A7"/>
          <stop offset="1" stop-color="#BC3A80"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="30.5" y1="17" x2="30.5" y2="41" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1762A7"/>
          <stop offset="1" stop-color="#BC3A80"/>
          </linearGradient>
          </defs>
        </svg>
        <span className="font-semibold text-sm md:text-xl tracking-tight pl-2">Soundwave  </span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      onClick={() => toggleExpansion(!isExpanded)} >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className={ (isExpanded ? 'block' : 'hidden'
     ) + " lg:block w-full md:w-1/5 pb-2" } >
          <ul className="flex mt-4 md:mt-0 md:inline-flex">
           
            <li className="w-full text-center">
              <a className="px-4 text-white" onClick={() => toggleExpansion(!isExpanded)} href="#discover">Discover</a>
            </li>
            <li className="w-full text-center">
              <a className="px-4 text-white" onClick={() => toggleExpansion(!isExpanded)} href="#join">Join</a>
            </li>
          </ul>
      </div>
 
</nav>
  );
}

export default Header;