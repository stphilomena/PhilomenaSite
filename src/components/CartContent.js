import * as React from "react"
import { useSelector} from 'react-redux'
import {USD_P2} from '../helpers/NumberHelper'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useDispatch} from "react-redux";
import {removeProduct} from "../state/cart";
import {Link} from "gatsby";

const CartContent = () => {

    const shipping = useSelector((state) => state.cart.shipping)
    const tax = useSelector((state) => state.cart.tax)
    const cartProducts = useSelector((state) => state.cart.products)
    const dispatch = useDispatch();

    return (
        <>
            {cartProducts.length === 0 ?
                <div className={"w-full p-2 m-2"}>
                    <p>Your Cart is empty.</p>
                    <Link className="font-bold underline" to={"/shop"}>Go to shop</Link> and browse our products.
                </div> : ""}
            {cartProducts.map(product => (
                    <div key={product.itemId} className="p-5 grid grid-cols-3 gap-5 justify-start w-full">
                        <div className="cols-span-1 w-full centerAll">
                            <GatsbyImage alt={product.title} image={getImage(product.image)} />
                        </div>
                        <div className="justify-start col-span-2">
                            <div className="font-bold text-sm">{product.title}</div>
                            <div className="text-gray-600">Quantity: {product.qty}</div>
                            <div className="text-gray-600">Total: {USD_P2(product.qty * product.price)}</div>
                            <div className="text-red-600 cursor-pointer" onClick={() => dispatch(removeProduct({itemId: product.itemId}))}>Remove</div>
                        </div>
                    </div>
                )
            )
            }
        </>
    )
}

export default CartContent