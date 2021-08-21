import * as React from "react"
import saintPhilomenaIMG from '../images/st_philomena.png';


const PhilomenaHeader = () => (

<header className="flex justify-left items-center bg-gradient-to-r from-red-600 to-red-900">
        <img className="w-1/4" src={saintPhilomenaIMG} alt="The National Shrine of Saint Philomena" />
        <div className="font-black text-white text-4xl lg:text-8xl">
        <div>ABOUT SAINT PHILOMENA</div>
      </div>
</header>

)

export default PhilomenaHeader