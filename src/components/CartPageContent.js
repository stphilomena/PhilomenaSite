import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"


const CartPageContent = () => (
    <div className="w-full centerAll">
        <div className="absolute w-full">
        <div className="relative bg-black w-96 top-0 right-0 z-50 text-white">
          
            <div>SUMMARY</div>

            <div>Subtotal:</div>
            <div>Shipping:</div>
            <div>Taxes:</div>

            <div>TOTAL:</div>

            <div><button> GUEST CHECKOUT </button></div>
            <div><button> MEMBER CHECKOUT </button></div>

        </div>
        </div>

        <div className="centerAll w-full bg-gray-400">         
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className>SHIPPING INFORMATION</div>
                <div>BILLING INFORMATION</div>
            </div>
        </div>      
    </div>
     )
     
     export default CartPageContent