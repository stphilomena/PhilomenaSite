import * as React from "react"

const Header = () => (
<header>
<script src="https://www.paypal.com/sdk/js?client-id=ATGIqdnp2AJWtjO-vxOYsJrZBPYIMaGhTdp3PAxn--qlIoRrjLHtJr6PAZufaJeTO2mg_aQnvRkvE0f9"></script>
<nav className="bg-white px-5">
 <div className="mx-auto md:max-w-6xl">
   <div className="flex justify-between h-auto">
	   <div className="flex justify-left items-start py-3">
  <a href="#">
  <img className="h-8" src="http://www.accessfloridaplans.com/images/accessflorida_logo_hor.svg" alt="Access Florida Plans - Health Insurance Agents" />
  </a>
	   </div>

	<div className="flex justify-center items-center">
		<div className="hidden sm:inline-flex">
		<div><a className="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Medicare</a></div>
		<div><a className="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Health Plans</a></div>
		<div><a className="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Applications</a></div>
		<div><a className="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Contact Us</a></div>
		</div>

		<div>	
		<label htmlFor="menu-toggle" className="flex justify-end pt-3 pointer-cursor sm:hidden inline-block">
			<svg className="w-10 h-10 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
		</label>
			

  <input className="hidden" type="checkbox" id="menu-toggle" />
  <div className="hidden" id="menu">
    <nav>
      <ul className="divide-y divide-light-blue-400 align-center text-base text-gray-700">
        <li><a className="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Medicare</a></li>
        <li><a className="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Health Plans</a></li>
        <li><a className="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Applications</a></li>
        <li><a className="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Contact Us</a></li>
		</ul>
	  </nav>
		</div>
     </div>
	  
 </div>
 </div>
 </div>
</nav>
<div>
<div className="py-20 px-5 bg-gradient-to-l from-green-400 to-blue-500">
  <div className="container mx-auto md:max-w-6xl">
    <h2 className="text-4xl font-bold mb-2 text-white">
      GET A FREE HEALTH INSURANCE QUOTE
    </h2>
    <h3 className="text-2xl mb-8 text-gray-200">
      Choose the best health plan from over 10 of the top Health Insurance Companies in North America.
    </h3>

    <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
      GET STARTED
    </button>
  </div>
</div>
</div>
</header>
)

export default Header
