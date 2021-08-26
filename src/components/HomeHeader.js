import * as React from "react"
import HomeHeaderIMG from '../images/saint_philomena_shrine_logo.svg';


const HomeHeader = () => (
    <div className="w-screen bg-gradient-to-r from-red-600 to-red-900 py-20 centerAll">
        <div className="w-1/2">
            <img className="w-full" src={HomeHeaderIMG} alt="National Shrine of Saint Philomena"/>
        </div>
    </div>

)

export default HomeHeader