import * as React from "react"
import {Link} from "gatsby";
import newMenuLogo from '../images/saint_philomena_shrine_logo_red.svg';

const NewMenu = () => (
    <div>
    <div className="bg-gray-200 border-b-2 border-gray-400 w-screen centerAll h-10 py-5">
        <div className="w-10/12 flex justify-between">
        
        <div className="bg-red-500 md:hidden relative block">
        <button>BURGER</button>
        
        <ul className="absolute w-80 mt-4 z-10 bg-gray-200 hidden">
            <li><div className="menuLink3"><Link to="/">Home</Link></div></li>
            <li><div className="menuLink3"><Link to="/philomena">St Philomena</Link></div></li>
            <li><div className="menuLink3"><Link to="/shop">Shop</Link></div></li>
            <li><div className="menuLink3"><Link to="/about">About Us</Link></div></li>
            <li><div className="menuLink3"><Link to="/contact">Contact Us</Link></div></li>
            <li><div className="menuLink3"><Link to="https://www.paypal.com/fundraiser/charity/4432015">Donate</Link></div></li>
            </ul>
        </div>
        <div className="">
        <img className="h-10 p-1" src={newMenuLogo} alt="National Shrine of Saint Philomena"/>
        </div>
        <div className=" flex">
            <ul className="hidden md:flex">
            <li><div className="menuLink3 hidden lg:block"><Link to="/">Home</Link></div></li>
            <li><div className="menuLink3"><Link to="/philomena">St Philomena</Link></div></li>
            <li><div className="menuLink3"><Link to="/shop">Shop</Link></div></li>
            <li><div className="menuLink3"><Link to="/about">About Us</Link></div></li>
            <li><div className="menuLink3"><Link to="/contact">Contact Us</Link></div></li>
            <li><div className="menuLink3"><Link to="https://www.paypal.com/fundraiser/charity/4432015">Donate</Link></div></li>
            </ul>
            <div className="text-gray-600 bg-gray-300 hover:text-white hover:bg-red-500 transition duration-300 py-2 px-3 md:px-3 lg:px-5 h-full"><Link to="/CartPage">Cart</Link></div>
        </div>
        </div> 
    </div>
    <div className="h-screen bg-black">BODY</div>
    </div>
    )
    
    export default NewMenu