import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const HomeContent = () => (
 
<div>
<div>
<section id="philomena">
    <div className="bg-gradient-to-tl from-yellow-800 via-yellow-500 to-yellow-200 centerAll">
        <div className="max-w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="pt-20">
        <div className="centerAll">
              <StaticImage src="../images/st_philomena.png" alt="Saint Philomena" />
        </div>
        </div>
        <div className="w-full p-5 centerAll bg-red-700 md:bg-transparent">
        <div>
        <h1 className="text-white font-black text-5xl">ABOUT SAINT PHILOMENA</h1>
        <br/>
        <p className="md:w-3/4 text-white">On May 24th, 1802, cleaning and clearing work was in progress in the most ancient of all the catacombs in Rome, the St. Priscilla catacombs, which dated almost from apostolic times. One of the workers, while digging in one of the ancient tunnels, by accident found a shelf-tomb that had never been opened. (Most of the graves in this cemetery had been opened, and their relics removed for safety.) The tomb was clearly the tomb of a martyr, with rough inscriptions including arrows, a lance, an anchor, a lily or flame, and the words: PAX TECUM FILUMENA</p><br/>
          
        <Link to="/philomena"><button className="shadow-lg py-5 px-7 font-bold text-lg transform scale-100 rounded-full bg-yellow-500 md:bg-red-700 text-white hover:scale-105">LEARN MORE</button></Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  </section>
</div>


<div>
<section id="shop">

      <div className="py-10 bg-gray-200 flex justify-center content-center">
        <div className="w-11/12">
        <div><h2 className="font-black text-4xl text-center text-red-900">DEVOTIONAL ITEMS</h2></div>

        <div className="sm:hidden">
        <div className="p-5 flex justify-center content-center">
        <div className="w-full bg-white rounded-xl shadow-xl content">
                <StaticImage className="rounded-t-xl" src="../images/blessed_cord.jpeg" alt="Saint Philomena Blessed Cord" />
                <div className="p-5">
                <h3 className="font-bold">ST. PHILOMENA BLESSED CORD</h3>
                <p className="text-gray-700">The cord is white and red, the white representing faith and virginity; the red the Saint's blood shed in martyrdom.</p>
                <p className="text-gray-700">Price: $3.00</p>
                </div>
                <button className="w-full bg-red-600 rounded-b-xl p-3 text-white hover:bg-red-800">ADD TO CART</button>
        </div>
        </div>
        </div>	

    <div className="hidden sm:contents">
        <div className="grid grid-cols-4 gap-5 py-5">
            
            <div className="w-full bg-white rounded-xl shadow-xl">
                <StaticImage className="rounded-t-xl" src="../images/blessed_cord.jpeg" alt="Saint Philomena Blessed Cord" />
             
             <div className="p-5">
                <h3 className="font-bold">ST. PHILOMENA BLESSED CORD</h3>
                <p className="text-gray-700">The cord is white and red, the white representing faith and virginity; the red the Saint's blood shed in martyrdom.</p>
                <p className="text-gray-700">Price: $5.00</p>
             </div>
                <button className="inset-x-0 bottom-0 w-full bg-red-600 rounded-b-xl p-3 text-white hover:bg-red-800">ADD TO CART</button>
            </div>

            <div className="w-full bg-white rounded-xl shadow-xl">
                <StaticImage className="rounded-t-xl" src="../images/blessed-oil.jpeg" alt="Saint Philomena Blessed Cord" />
                <div className="p-5">
                <h3 className="font-bold">HOLY OIL OF ST. PHILOMENA</h3>
                <p className="text-gray-700">The Holy Oil of Saint Philomena is blessed annually on the Sunday nearest to her birthday, January 10th.</p>
                <p className="text-gray-700">Price: $5.00</p>
                </div>
                <button className="w-full bg-red-600 rounded-b-xl p-3 text-white hover:bg-red-800">ADD TO CART</button>
            </div>
            <div className="w-full bg-white rounded-xl shadow-xl">
                <StaticImage className="rounded-t-xl" src="../images/stphil_prayer_card.jpeg" alt="Saint Philomena Blessed Cord" />
                <div className="p-5">
                <h3 className="font-bold">ST. PHILOMENA PRAYER CARD</h3>
                <p className="text-gray-700">St Philomena Prayer Card. Includes Novena prayer, full color picture and short history of the Saint.</p>
                <p className="text-gray-700">Price: $5.00</p>
                </div>
                <button className="w-full bg-red-600 rounded-b-xl p-3 text-white hover:bg-red-800">ADD TO CART</button>
            </div>
            <div className="w-full bg-white rounded-xl shadow-xl">
                <StaticImage className="rounded-t-xl" src="../images/st_phil_book.jpeg" alt="Saint Philomena Martyr Book" />
                <div className="p-5">
                <h3 className="font-bold">BOOK: SAINT PHILOMENA, VIRGIN AND MARTYR</h3>
                <p className="text-gray-700">"St. Philomena, Virgin and Martyr " by Fr. de Lucia, pioneer of devotion to her in the early 19th. century. 72 pages.</p>
                <p className="text-gray-700">Price: $5.00</p>
                </div>
                <button className="w-full bg-red-600 rounded-b-xl p-3 text-white hover:bg-red-800">ADD TO CART</button>
            </div>
            
        </div>
        </div>	
    </div>
    </div>
  </section>
</div>



<div>
<section id="about">

<div className="bg-gradient-to-tl from-blue-500 via-blue-300 to-white centerAll">
 <div className="max-w-3/4">
   <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
    <div className="pt-10">
     <div className="centerAll w-full">
     <StaticImage className="centerAll w-2/3" src="../images/Our_lady_of_victory_crop.png" alt="Our Lady of Victory in Davie Florida" />
     </div>
    </div>
    
    <div className="w-full p-5 centerAll bg-white md:bg-transparent">
        <div className="w-full">
             <h1 className="text-blue-700 font-black text-5xl">ABOUT US</h1>
             <div className="md:w-3/4">
            <p><br />The national shrine of St. Philomena in south Florida is operated by the Society of St. Pius X. Owing to the difficulties caused in the past year by the Coronavirus, the shrine was moved 25 miles north from its Little Havana home in Miami north to Our Lady of Victory in Davie, FL. The last Mass for the shrine at the Miami location was March 22nd, 2020. <br /><br />
            “The catalyst for the merging of the two chapels was Covid-19,” said Fr. Samuel Fabula, the pastor of Our Lady of Victory. “The shutdowns and restrictions for Miami in Dade County were more restrictive than those for Davie in Broward County. When the faithful of St. Philomena were denied access to the church, the decision was made to combine the two parishes at Our Lady of Victory, which is also the larger chapel.”</p><br /><br />
              <Link to="/about"><button className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                   CONTINUE READING
                  </button>
              </Link>
              </div>
        </div>
        </div>
        </div>
        </div>
        </div>

      </section>
</div>


<div>
<section id="contact">
<div className="bg-gradient-to-l from-gray-300 to-white centerAll">
    <div className="max-w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="py-10">
                <div className="centerAll">
                <StaticImage className="relative w-3/4 mb-0" src="../images/St-Philomena-Relic.png" alt="Blessed Relic of Saint Philomena at the National Shrine" />
                </div>
            </div>
        
          
                    <div className="w-full p-5 centerAll bg-gray-200 md:bg-transparent">
                        <div>
                             <h1 className="text-gray-600 font-black text-5xl">SCHEDULE A VISIT</h1>
                        <p className="text-gray-600"><br />Planning a visit or pilgrimage to the Shrine? Tell us about it!</p><br />
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
                                                        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
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

export default HomeContent