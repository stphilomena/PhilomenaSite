import * as React from "react"
import {useState} from "react"
import {Link} from "gatsby";
import newMenuLogo from '../images/saint_philomena_shrine_logo_red.svg';
import {useSelector} from 'react-redux';
import { BsList, BsCart3 } from "react-icons/bs";

const NewMenu = () => {
    
    const cartLength = useSelector((state) => state.cart.products.length)

    const [isOn, setIsOn] = useState(false); 
    return (
    
    <div>
    <div className="bg-gray-200 border-b-2 border-gray-400 w-screen centerAll h-10 py-5">
        <div className="w-10/12 flex justify-between">
        
        <div className="mt-2 md:hidden relative block">
        <button className="hover:text-red-600" onClick = { () => setIsOn(!isOn) }> <BsList size="1.5em"/> </button>
        
        <ul className={"absolute w-80 mt-1 z-10 bg-gray-200 " + (isOn ? "" : "hidden")} >
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
            <div className={"text-gray-600  hover:text-white transition duration-300 py-2 px-3 md:px-3 lg:px-5 h-full " + (cartLength>0? "bg-red-600" : "bg-gray-300")} ><Link to="/CartPage"><BsCart3 size="1.5em"/></Link></div>
        </div>
        </div> 
        </div>
        </div>
    
    )
}
    export default NewMenu