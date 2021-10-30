import * as React from "react"
import {Link} from "gatsby";

const NewMenu = () => (
    <div>
    <div className="bg-gray-200 border-b-2 border-gray-400 w-screen centerAll h-10 py-5">
        <div className="w-10/12 flex justify-between">
        <div className="bg-red-400 md:hidden relative block">BURGER
        <ul className="absolute w-80 mt-4 z-10 bg-green-300 block">
            <li><div className="menuLink3"><Link to="/">Home</Link></div></li>
            <li><div className="menuLink3"><Link to="/philomena">St Philomena</Link></div></li>
            <li><div className="menuLink3"><Link to="/shop">Shop</Link></div></li>
            <li><div className="menuLink3"><Link to="/about">About Us</Link></div></li>
            <li><div className="menuLink3"><Link to="/contact">Contact Us</Link></div></li>
            <li><div className="menuLink3"><Link to="https://www.paypal.com/fundraiser/charity/4432015">Donate</Link></div></li>
            </ul>
        </div>
        <div className="bg-yellow-300">LOGO</div>
        <div className="bg-green-300 flex">
            <ul className="hidden md:flex">
            <li><div className="menuLink3 hidden lg:block"><Link to="/">Home</Link></div></li>
            <li><div className="menuLink3"><Link to="/philomena">St Philomena</Link></div></li>
            <li><div className="menuLink3"><Link to="/shop">Shop</Link></div></li>
            <li><div className="menuLink3"><Link to="/about">About Us</Link></div></li>
            <li><div className="menuLink3"><Link to="/contact">Contact Us</Link></div></li>
            <li><div className="menuLink3"><Link to="https://www.paypal.com/fundraiser/charity/4432015">Donate</Link></div></li>
            </ul>
            <div className="menuLink3"><Link to="/CartPage">Cart</Link></div>
        </div>
        </div> 
    </div>
    <div className="h-screen bg-black">BODY</div>
    </div>
    )
    
    export default NewMenu