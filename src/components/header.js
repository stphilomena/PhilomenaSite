import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
<header>
<nav class="bg-white px-5">
 <div class="mx-auto md:max-w-6xl">
   <div class="flex justify-between h-auto">
	   
	   <div class="flex justify-left items-start py-3">
  <a href="#">
  <img class="h-8" src="http://www.accessfloridaplans.com/images/accessflorida_logo_hor.svg" alt="Access Florida Plans - Health Insurance Agents" />
  </a>
	   </div>
	
	<div class="flex justify-center items-center">
		<div class="hidden sm:inline-flex">
		<div><a class="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Medicare</a></div>
		<div><a class="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Health Plans</a></div>
		<div><a class="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Applications</a></div>
		<div><a class="px-3  no-underline text-gray-800 hover:bg-blue-700 hover:text-white py-5" href="#">Contact Us</a></div>
		</div>

		<div>	
		<label for="menu-toggle" class="flex justify-end pt-3 pointer-cursor sm:hidden inline-block">
			<svg class="w-10 h-10 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
		</label>
			

  <input class="hidden" type="checkbox" id="menu-toggle" />
  <div class="hidden" id="menu">
    <nav>
      <ul class="divide-y divide-light-blue-400 align-center text-base text-gray-700">
        <li><a class="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Medicare</a></li>
        <li><a class="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Health Plans</a></li>
        <li><a class="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Applications</a></li>
        <li><a class="py-3 px-5 block border-b-4 border-transparent hover:border-blue-700 hover:text-blue-700" href="#">Contact Us</a></li>
		</ul>
	  </nav>
		</div>
     </div>
	  
 </div>
 </div>
 </div>
</nav>
<div>
<div class="py-20 px-5 bg-gradient-to-l from-green-400 to-blue-500">
  <div class="container mx-auto md:max-w-6xl">
    <h2 class="text-4xl font-bold mb-2 text-white">
      GET A FREE HEALTH INSURANCE QUOTE
    </h2>
    <h3 class="text-2xl mb-8 text-gray-200">
      Choose the best health plan from over 10 of the top Health Insurance Companies in North America.
    </h3>

    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
      GET STARTED
    </button>
  </div>
</div>
</div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
