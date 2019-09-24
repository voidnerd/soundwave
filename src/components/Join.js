import React from 'react';


const Join = () => {

  return (
    <>
    <div id="join" className="md:flex items-stretch px-2 md:px-20 pt-32 pb-24 relative ">
    
            <div className="flex-1 flex-wrap flex">

                <h1 className="text-white text-5xl font-bold mx-auto md:mx-0 my-5  self-center">Join the <span className="text-pink font-bold">Fun.</span></h1>
            
  
            </div>
            <div className="flex-1 flex-wrap  min-h-full relative z-20">
                <div className="bg-inverse pt-3 pb-2 rounded">
                    <form className="px-8 pt-6 pb-6 mb-4">
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Name:
                            </label>
                            <input className="shadow appearance-none  bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ndfreke Friday" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Email:
                            </label>
                            <input className="shadow appearance-none  bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@example.com" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" for="password">
                            Password:
                        </label>
                        <input className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-secondary w-full hover:bg-pink text-white font-bold font-poppins py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Join Now
                        </button>

                        </div>
                    </form>

                </div>
            </div>

            <div className="circle-4 bg-eclipes-blue z-10 hidden md:block"></div>
    </div>
    </>
  );
}

export default Join;
