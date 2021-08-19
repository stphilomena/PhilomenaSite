import * as React from "react"
import { Link } from "gatsby"
import HomeHeaderIMG from '../images/saint_philomena_shrine_logo.svg';


const HomeHeader = () => (
   
    <div class="w-screen bg-gradient-to-r from-red-600 to-red-900 py-20 centerAll">
 
    <div class="w-3/4">
         <img class="w-full" src={HomeHeaderIMG} alt="National Shrine of Saint Philomena" />
    </div>
    </div>

)

export default HomeHeader