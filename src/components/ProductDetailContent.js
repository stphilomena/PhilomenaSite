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
        <div class="text-xl w-full">
            <div className="text-2xl font-bold">{product.title}</div>
            <div className="text-gray-400">{product.description}</div> 
            <div className="grid grid-cols-2">
            <div>{product.option1Name}</div>
            <div>{product.option2Name}</div>
            </div>
            Price: {USD_P2(product.option1Price)}
            <br />
            Quantity:
            
            <br />
            Add To Cart
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