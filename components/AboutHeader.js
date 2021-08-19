import * as React from "react"
import { Link } from "gatsby"
import ShrineHeaderImg from '../images/our_lady_of_victory_chapel.png';


const AboutHeader = () => (
   
<div class="flex justify-left items-center bg-gradient-to-tl from-green-400 to-transparent">
<img class="w-1/3" src={ShrineHeaderImg} alt="The National Shrine of Saint Philomena" />
    <div class="font-black text-white text-4xl lg:text-8xl">
    <div>ABOUT THE SHRINE</div>
  </div>
</div>
)

export default AboutHeader