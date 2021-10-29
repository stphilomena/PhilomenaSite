import * as React from "react"
import {useState} from "react";
import {Link} from "gatsby"
import {USD_P2} from "../helpers/NumberHelper";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {useDispatch} from "react-redux";
import {addProduct} from "../state/cart";

const Card = ({item}) => {

    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);

    const updateQty = (newQty) => {
        if(isNaN(newQty)) return;
        if(newQty <= 0) return;
        if(newQty >= item.option1Quantity)
            newQty = item.option1Quantity;
        setQty(newQty);
    }
    const onQtyChange = (e) => {
        let newQty = Number.parseInt(e.target.value);
        updateQty(newQty)
    }
    const onAddToCart = () => dispatch(addProduct({
        ...item,
        name: item.option1Name,
        price: item.option1Price,
        qty,
        availQty: item.option1Quantity
    }))

    return (
        <div className="bg-white w-60 relative group">

            <section className="bg-white h-60 centerAll">
                <button
                    className="centerAll h-60 w-60 bg-gray-400 transform translate-y-0 transition duration-500 hover:-translate-y-3 border-white border-b-4 group-hover:border-red-600">
                    <Link to={"/" + item.slug}>
                        <GatsbyImage alt={item.title} image={getImage(item.image)}/>
                    </Link>
                </button>
            </section>

            <section className="grid grid-rows-3">
                <div className="centerAll  text-sm font-bold w-full">
                    <h4>{item.title}</h4>
                </div>
                <div className="grid grid-cols-2 gap-1">
                <button className="hover:bg-gray-200"><div className="text-gray-500 centerAll ">
                    {item.option1Name}
                </div></button>
                <button className="hover:bg-gray-200"><div className="text-gray-500 centerAll ">
                    {item.option2Name}
                </div>
                </button>
                </div>
                <div>
                    <p className="text-red-500 font-bold text-xl py-2">PRICE: &nbsp;
                        {USD_P2(item.option1Price)}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="grid grid-cols-2">

                    <div className="centerAll gap-2">
                        <button id="lessQty"
                                className="rounded-full  border-2 border-gray-500 h-8 w-8 font-bold hover:bg-gray-200"
                                onClick={() => updateQty(qty-1)}
                        >-
                        </button>
                        <div className="font-bold text-lg px-1">
                            <input type="text" onChange={onQtyChange} className={"w-8 text-center"}
                                   value={qty}
                            />
                        </div>
                        <button id="lessQty"
                                className="rounded-full  border-2 border-gray-500 h-8 w-8 font-bold hover:bg-gray-200"
                                onClick={() => updateQty(qty+1)}
                        >+
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-red-500 px-3 py-3 text-center font-bold text-white hover:bg-red-700"
                        onClick={onAddToCart}>Add
                            to Cart
                        </button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Card


