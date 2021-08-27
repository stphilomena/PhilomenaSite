import * as React from "react"
import {useState} from "react";
import {Link} from "gatsby";

const Accordion = ({children, title}) => {
  const [expanded, setExpanded] = useState(false);

  return (
      <>
          <h2 className={expanded?'title is-expanded':'title'}>
              <button onClick={()=>setExpanded(!expanded)}>{title}</button>
          </h2>
          <div className={expanded?'content is-expanded':'content'}>
              {children}
          </div>
      </>
  )
}

const Menu = () => (
<div className="bg-gray-200">
    <Accordion title={"This is the Title"}>
        <p>Any HTML or <div>div</div> or whatever you want to appear</p>
    </Accordion>
  <ul className="centerAll text-base lg:text-2xl px-2">
    <li className="menuLink"><Link to="/philomena">St Philomena</Link></li>
    <li className="menuLink"><Link to="/shop">Shop</Link></li>
    <li className="menuLink"><Link to="/about">About Us</Link></li>
    <li className="menuLink"><Link to="/contact">Contact Us</Link></li>
    <li className="menuLink"><a href="https://www.paypal.com/us/fundraiser/charity/1718855">Donate</a></li>
</ul>      
</div>
)

export default Menu