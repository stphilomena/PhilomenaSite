import * as React from "react"
import CartLogo from '../images/cart_icon.svg';
import CartContent from "../components/CartContent"
import {useSelector} from 'react-redux'
import {USD_P2} from '../helpers/NumberHelper'
import {useState,useEffect} from "react";
import {useFirstRender} from "../common/useFirstRender";
import {Link} from "gatsby"

const SideCart = () => {

    const cartTotal = useSelector((state) => state.cart.total)
    const cartLength = useSelector((state) => state.cart.products.length)
    const [expanded, setExpanded] = useState(false)
    const firstRender = useFirstRender();

    useEffect(() => {
        if(!firstRender) {
            setExpanded(cartLength > 0)
        }
    }, [firstRender, cartLength, cartTotal])

    return (
        <div className={"fixed top-10 right-0 w-96 overflow-x-hidden"}>TEST TEST TEST
            <div
                className={"flex relative bg-white w-80 shadow-xl transition-all duration-300 ease-in " + (!expanded ? "-right-80 ml-16" : "-right-16")} style="width:1000px;">
                <div id="cartButton"
                     className="relative -ml-16 w-16 h-16 bg-red-500 right-0 centerAll rounded-l-xl z-40">
                    <img className="h-10" src={CartLogo} alt="National Shrine of Saint Philomena Shopping Cart"
                         onClick={() => setExpanded(!expanded)}
                    />
                </div>
                <div className="w-full">
                    <div className="bg-red-500 w-80 h-10 right-0 z-10 centerAll font-bold text-white">
                        SHOPPING CART
                    </div>

                    <div className="centerAll py-10 flex flex-col max-h-120 overflow-auto">
                        <CartContent/>
                    </div>

                    <div className="centerAll w-full py-5 font-bold">
                        CART TOTAL: {USD_P2(cartTotal)}
                    </div>

                    <div className="centerAll w-full pb-10">

                        <Link to={"/CartPage"} className="bg-red-500 centerAll font-bold text-white p-5">
                            CHECKOUT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCart
