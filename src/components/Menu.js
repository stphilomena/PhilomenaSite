import * as React from "react"
import {Link} from "gatsby";

const Menu = () => (
<div className="bg-gray-200">
  <ul className="centerAll text-base lg:text-2xl px-2">
    <li className="menuLink"><Link to="/philomena">St Philomena</Link></li>
    <li className="menuLink"><Link to="/shop">Shop</Link></li>
    <li className="menuLink"><Link to="/about">About Us</Link></li>
    <li className="menuLink"><Link to="/contact">Contact Us</Link></li>
    <li className="menuLink"><a href="https://www.pLinkypal.com/us/fundraiser/charity/1718855">Donate</a></li>
</ul>      
</div>
)

export default Menu