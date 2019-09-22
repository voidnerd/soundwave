import React from 'react';


const Contact = () => {

  return (
    <>
    <div className="md:flex items-stretch px-2 md:px-20 pt-32 pb-24">
    
            <div className="flex-1 flex-wrap flex">

                <h1 className="text-white text-5xl font-bold mx-0 my-5 self-center">Join the <span className="text-pink font-bold">Fun.</span></h1>
            
  
            </div>
            <div className="flex-1 flex-wrap  min-h-full relative">
                <div className="bg-inverse pt-3 pb-2">
                    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Name:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ndfreke Friday" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" for="username">
                                Email:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@example.com" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" for="password">
                            Password:
                        </label>
                        <input className="shadow appearance-none border border-secondary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-secondary w-full hover:bg-inverse text-white font-bold font-poppins py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Join Now
                        </button>

                        </div>
                    </form>

                </div>
            </div>
    </div>
    </>
  );
}

export default Contact;
