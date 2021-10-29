import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {USD_P2} from "../helpers/NumberHelper";

const ProductDetailContent = ({product}) => (
 
<div className="centerAll"> 
<div className="w-10/12">
<div class="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
        <div class="w-full centerAll">      
        <div>
        <GatsbyImage alt={product.title} image={getImage(product.image)}/>

        </div>
        </div>
        <div class="text-xl w-full space-y-4">
            <div className="text-2xl font-bold">{product.title}</div>
            <div className="text-gray-400">{product.description}</div> 
            <div className="flex">
            <button className="border rounded-md px-5 py-2 hover:bg-gray-200"><div>{product.option1Name}</div></button>
            <button className="hover:bg-gray-200"><div>{product.option2Name}</div></button>
            </div>
            <div className="text-red-500 font-bold">Price: {USD_P2(product.option1Price)}</div>
            <div>
            Quantity:
            </div>
            <div className="py-10">
            <button className="bg-red-600 py-5 px-10 text-white hover:bg-red-700">
            Add To Cart
            </button>
            </div>
        </div>
    </div>
    
<div class="centerAll">
    OTHER PRODUCTS:
    <br />
    CARDS CAROUSEL
</div>
</div>
</div>
)

export default ProductDetailContent