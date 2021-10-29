import * as React from "react"
import {Link} from "gatsby";

const NewMenu = () => (
    <div className="bg-gray-200 border-b-2 border-gray-400">
        <div className="centerAll">
            <div className="w-10/12">
                <div className="py-5 grid grid-cols-2">
                    <div className=" w-auto">logo</div>
                        <div className=" flex justify-end">
                            <div className="">

                            <ul className="centerAll text-sm lg:text-xl space-x-6">
                            <li className="menuLink2"><Link to="/philomena">Philomena</Link></li>
                            <li className="menuLink2"><Link to="/shop">Shop</Link></li>
                            <li className="menuLink2"><Link to="/about">About</Link></li>
                            <li className="menuLink2"><Link to="/contact">Contact</Link></li>
                            <li className="menuLink2"><a href="https://www.paypal.com/donate/?hosted_button_id=MC3W3XP9HZ49N">Donate</a></li>
                            </ul>  

                            </div>
                            <div className="px-4">	&#x1f6d2;</div>
                            <svg className="icon icon-menu h-7"><use xlinkHref="#icon-menu"></use></svg><span className="name"> icon-menu</span>
                        </div>
                    </div>
        </div>
        </div>     
    </div>
    )
    
    export default NewMenu