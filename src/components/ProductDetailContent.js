import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const ProductDetailContent = () => (
 
<div>
<div class="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
        <div class="bg-green-400 w-full centerAll">      
        <div>
            PICTURE
        </div>
        </div>
        <div class="bg-blue-400 w-full">
            Title
            <br />
            Description
            <br />
            Size:
            <br />
            PRICE
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