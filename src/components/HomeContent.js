import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {useStaticQuery, graphql} from "gatsby"
import {Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {USD_P2} from "../helpers/NumberHelper";

import {useDispatch} from "react-redux";
import {addProduct} from "../state/cart";

const HomeContent = () => {
    const { inventory } = useStaticQuery(
        graphql`
        
        query MyQuery {
            inventory: allGoogleSpreadsheetInventoryInventory(
              sort: {fields: id, order: DESC}
              filter: {option1Quantity: {ne: "0"}}
              limit: 3
            ) {
              nodes {
                  id 
                  itemId
                picture
                slug
                option1Name
                option1Price
                option1Quantity
                option2Name
                option2Price
                option2Quantity
                image {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                title
                description
              }
            }
          }
        
        `
      )
  
      const items = inventory.nodes;
      console.log(items);

      const dispatch = useDispatch();
    const onAddToCart = (item) => dispatch(addProduct({
        ...item,
        name: item.option1Name,
        price: item.option1Price,
        qty: 1,
        availQty: item.option1Quantity
    }))

    return (
 
<div>
<div className="">
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
        <p className="md:w-3/4 text-white">OnA May 24th, 1802, cleaning and clearing work was in progress in the most ancient of all the catacombs in Rome, the St. Priscilla catacombs, which dated almost from apostolic times. One of the workers, while digging in one of the ancient tunnels, by accident found a shelf-tomb that had never been opened. (Most of the graves in this cemetery had been opened, and their relics removed for safety.) The tomb was clearly the tomb of a martyr, with rough inscriptions including arrows, a lance, an anchor, a lily or flame, and the words: PAX TECUM FILUMENA</p><br/>
          
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
                <div className="">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                        {
                            items.map(item => (
                                <div key={item.id} className="relative w-full bg-white shadow-xl pb-10">
                                    <Link to={"/" + item.slug}>
                                        <GatsbyImage alt={item.title} image={getImage(item.image)}/>
                                    </Link>
                                    <div className="p-5">
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="text-gray-700 hidden md:block">{item.description}</p>
                                        <p className="text-gray-700">Price: {USD_P2(item.option1Price)}</p>
                                    </div>
                                    <button
                                        className="absolute mb-0 inset-x-0 bottom-0 w-full bg-red-600  p-3 text-white hover:bg-red-800"
                                        onClick={() => onAddToCart(item)}
                                    >ADD
                                        TO CART
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>



<div>
<section id="about">

<div className="bg-gradient-to-tl from-blue-300 via-blue-100 to-white centerAll">
 <div className="max-w-3/4">
   <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
    <div className="pt-10">
     <div className="centerAll w-11/12">
     <StaticImage className="centerAll w-2/3 md:w-5/6 lg:w-2/3" src="../images/Our_lady_of_victory_crop.png" alt="Our Lady of Victory in Davie Florida" />
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

<div className="centerAll">
<section className="">
<div className="py-10">
    <iframe className="h-120 w-screen" src="https://fsspx.today/chapel/fl-davie/" title="Calendar for the National Shrine of Saint Philomena"></iframe>
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
                <StaticImage className="relative w-4/5 mb-0" src="../images/St-Philomena-Relic.png" alt="Blessed Relic of Saint Philomena at the National Shrine" />
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
    }

export default HomeContent
