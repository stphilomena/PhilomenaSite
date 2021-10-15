import * as React from "react"
import CartLogo from '../images/cart_icon.svg';
import CartContent from "../components/CartContent"
import {useSelector} from 'react-redux'
import {USD_P2} from '../helpers/NumberHelper'
import {useState,useEffect} from "react";
import {useFirstRender} from "../common/useFirstRender";

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
        <div className={"fixed top-10 right-0 w-120 overflow-x-hidden h-screen"}>
            <div
                className={"flex relative bg-white w-96 shadow-xl transition-all duration-300 ease-in " + (!expanded ? "-right-96 ml-24" : "-right-24")}>
                <div id="cartButton"
                     className="relative -ml-20 w-20 h-20 bg-red-500 right-0 centerAll rounded-l-xl z-40">
                    <img className="h-20" src={CartLogo} alt="National Shrine of Saint Philomena Shopping Cart"
                         onClick={() => setExpanded(!expanded)}
                    />
                </div>
                <div className="w-full">
                    <div className="bg-red-500 w-96 h-10 right-0 z-0 centerAll font-bold text-white">
                        SHOPPING CART
                    </div>

                    <div className="centerAll py-10 flex flex-col max-h-120 overflow-auto">
                        <CartContent/>
                    </div>

                    <div className="centerAll w-full py-5 font-bold">
                        CART TOTAL: {USD_P2(cartTotal)}
                    </div>

                    <div className="centerAll w-full pb-10">

                        <button className="bg-red-500 centerAll font-bold text-white p-5">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCart