import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";

const ContactContent = () => (

    <div>
<div>
<section id="contact">
<div className="bg-gradient-to-tl from-blue-700 via-blue-300 to-white centerAll">
    <div className="max-w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="pt-20">
                <div className="centerAll">
                <StaticImage className="relative w-3/4 mb-0" src="../images/Our_lady_of_victory_crop.png" alt="Our Lady of Victory" />
                </div>
            </div>
        
          
                    <div className="w-full p-5 centerAll bg-blue-900 md:bg-transparent">
                        <div>
                             <h1 className="text-white font-black text-5xl">SCHEDULE A VISIT</h1>
                        <p className="text-white">Planning a visit or pilgrimage to the Shrine? Tell us about it!</p>
                            <div>
                                  <form id="appointment" action="#" method="">
                                                    <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="text" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Name"/>
                                                        </div>
                            
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="tel" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Telephone"/>
                                                        </div>
                                                                        
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="email" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="E-Mail"/>
                                                        </div>
                            
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="text" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Language"/>
                                                        </div>
                                        
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="date" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Date"/>
                                                        </div>
                                            
                                                        <div className="col-span-2 lg:col-span-1">
                                                        <input type="time" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Time"/>
                                                        </div>										  
                                            
                                                        <div className="col-span-2">
                                                        <textarea cols="30" rows="4" className="text-gray-500 border-solid border-gray-400 border p-3 md:text-xl w-full" placeholder="Message"/>
                                                        </div>
                            
                                                        <div className="col-span-2 text-center">
                                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                                                        SUBMIT
                                                        </button>   
                                                        </div>
                                                    </div>
                                                    </form>
                            </div>
                        </div>
        </div>
    </div>
    </div>
    </div>
      
</section>
</div>
    </div>

)

export default ContactContent