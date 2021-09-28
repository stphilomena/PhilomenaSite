import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {useState} from "react";

const EmptyCart = () => (
<div>
<div className="text-red-500 font-black text-4xl centerAll py-10">SHOPPING CART</div>

<div className="centerAll py-20">
<div className="w-full md:w-10/12 centerAll bg-red-500 py-10 text-center text-white font-bold text-3xl">
    YOUR SHOPPING CART IS EMPTY!
    </div>
    </div>

<div className="centerAll">
<div className="w-10/12">
    <div className="centerAll text-xl py-5">What would you like to do next?</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="centerAll ">
        <button className="bg-blue-500 w-full text-2xl text-white font-bold p-5 px-10 rounded-full hover:bg-blue-600">VISIT SHOP</button></div>
    <div className="centerAll ">
    <button className="bg-indigo-700 w-full text-2xl text-white font-bold p-5 px-10 rounded-full hover:bg-indigo-900">DONATE NOW</button></div>
</div>
<div className="py-10">

</div>
</div>
</div>
</div>

)
export default EmptyCart
