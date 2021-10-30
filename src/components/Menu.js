import * as React from "react"
import {Link} from "gatsby";

const Menu = () => (
<div className="bg-gray-200 border-b-2 border-gray-400">
<script src="https://www.paypal.com/sdk/js?client-id=ASQwqDlBG6cxCWAynbTjbRevQVD7Ihunm4ivgbOF6TUgGIgjtgrVrAiF7CayL3tdnnw6_F8FcRGwlQgL" />
  <ul className="centerAll text-sm lg:text-2xl px-2">
    <li className="menuLink"><Link to="/philomena">St Philomena</Link></li>
    <li className="menuLink"><Link to="/shop">Shop</Link></li>
    <li className="menuLink"><Link to="/about">About Us</Link></li>
    <li className="menuLink"><Link to="/contact">Contact Us</Link></li>
    <li className="menuLink"><a href="https://www.paypal.com/fundraiser/charity/4432015">Donate</a></li>
</ul>      
</div>
)

export default Menu
