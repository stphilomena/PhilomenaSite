import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {USD_P2} from "../helpers/NumberHelper";

const ProductDetailContent = ({product}) => (
 
<div>
<div class="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
        <div class="bg-green-400 w-full centerAll">      
        <div>
        <GatsbyImage alt={product.title} image={getImage(product.image)}/>

        </div>
        </div>
        <div class="bg-blue-400 w-full">
             {product.title}
            <br />
            {product.description}
            <br />
            {product.option1Name}
            <br />
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
)

export default ProductDetailContent