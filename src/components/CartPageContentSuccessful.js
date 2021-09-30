import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {useState} from "react";

const SuccessfulCart = () => (
<div>
<div className="text-green-500 font-black text-5xl centerAll py-20">THANK YOU!</div>

<div className="centerAll">
<div className="w-full md:w-10/12 centerAll text-center text-green-500 text-2xl">
    YOUR ORDER WAS COMPLETED SUCCESSFULLY.
    </div>
    </div>

<div className="centerAll">
<div className="w-10/12">
    <div className="centerAll text-xl py-20">What would you like to do next?</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0">
    <div className="centerAll ">
        <button className="bg-blue-500 w-full text-2xl text-white font-bold p-5 px-10 rounded-full hover:bg-blue-600 lg:w-8/12">RETURN TO SHOP</button></div>
    <div className="centerAll ">
    <button className="bg-indigo-700 w-full text-2xl text-white font-bold p-5 px-10 rounded-full hover:bg-indigo-900 lg:w-8/12">DONATE NOW</button></div>
</div>
<div className="py-10">

</div>
</div>
</div>
</div>

)
export default SuccessfulCart
