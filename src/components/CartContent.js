import * as React from "react"
import {USD_P2} from "../helpers/NumberHelper";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CartContent = () => (
    <div className="flex absolute top-10 right-0 bg-white w-96 shadow-xl">
          <div id="cartButton" className="relative -ml-20 w-20 h-20 bg-red-500 right-0 centerAll rounded-l-xl z-40">
                <img className="h-20" src={CartLogo} alt="National Shrine of Saint Philomena Shopping Cart"/>
            </div>
        <div className="w-full">
            <div className="bg-red-500 w-96 h-10 right-0 z-0 centerAll font-bold text-white">
            SHOPPING CART
            
            </div>
            
            <div className="centerAll py-10">
                CONTENT
            </div>
           
            <div className="centerAll w-full py-5 font-bold">
               CART TOTAL: $ - -
            </div> 
    
            <div className="centerAll w-full pb-10">
               
                    <button className="bg-red-500 centerAll font-bold text-white p-5">
                        CHECKOUT
                    </button>
            </div> 
        </div>
    </div>
    )
    
    export default CartContent