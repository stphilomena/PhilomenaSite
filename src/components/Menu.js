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
    <div className="bg-gray-200  border-b-2 border-gray-400 w-screen centerAll h-10 py-5">
        <div className="w-10/12 flex justify-between">
        
        <div className="mt-2 md:hidden relative block ali">
        <button className="hover:text-red-600" onClick = { () => setIsOn(!isOn) }> <BsList size="1.5em"/> </button>
        
        <ul className={"absolute w-80 mt-1 z-10 bg-gray-200 " + (isOn ? "" : "hidden")} >
            <li><Link to="/"><div className="menuLink3">Home</div></Link></li>
            <li><Link to="/philomena"><div className="menuLink3">St Philomena</div></Link></li>
            <li><Link to="/shop"><div className="menuLink3">Shop</div></Link></li>
            <li><Link to="/about"><div className="menuLink3">About Us</div></Link></li>
            <li><Link to="/contact"><div className="menuLink3">Contact Us</div></Link></li>
            <li><Link to="https://www.paypal.com/fundraiser/charity/4432015"><div className="menuLink3">Donate</div></Link></li>
            </ul>
        </div>
        <div className="">
        <img className="h-10 p-1 " src={newMenuLogo} alt="National Shrine of Saint Philomena"/>
        </div>
        <div className=" flex">
            <ul className="hidden md:flex ">
            <li><div className="menuLink3 hidden lg:block"><Link to="/">Home</Link></div></li>
             <li><Link to="/"><div className="menuLink3">Home</div></Link></li>
            <li><Link to="/philomena"><div className="menuLink3">St Philomena</div></Link></li>
            <li><Link to="/shop"><div className="menuLink3">Shop</div></Link></li>
            <li><Link to="/about"><div className="menuLink3">About Us</div></Link></li>
            <li><Link to="/contact"><div className="menuLink3">Contact Us</div></Link></li>
            <li><Link to="https://www.paypal.com/fundraiser/charity/4432015"><div className="menuLink3 ">Donate</div></Link></li>
            </ul>
            <div className={" transition duration-300 py-2 px-3 md:px-3 lg:px-5 h-full " + (cartLength>0? "bg-red-500 text-white hover:bg-red-700" : "bg-gray-300 text-gray-600")} ><Link to="/CartPage"><BsCart3 size="1.5em"/></Link></div>
        </div>
        </div> 
        </div>
        </div>
    
    )
}
    export default NewMenu