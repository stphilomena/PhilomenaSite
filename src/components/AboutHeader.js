import * as React from "react"
import ShrineHeaderImg from '../images/our_lady_of_victory_chapel.png';


const AboutHeader = () => (
   
<div className="flex justify-left items-center bg-gradient-to-tl from-green-400 to-transparent">
<img className="w-1/3" src={ShrineHeaderImg} alt="The National Shrine of Saint Philomena" />
    <div className="font-black text-white text-4xl lg:text-8xl">
    <div>ABOUT THE SHRINE</div>
  </div>
</div>
)

export default AboutHeader