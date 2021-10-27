import * as React from "react"
import HomeHeaderIMG from '../images/saint_philomena_shrine_logo.svg';


const HomeHeader = () => (
  const PAYPAL_SCRIPT = 'https://www.paypal.com/sdk/js?client-id=AVMHbhoq5ugxAWgjRLW7ZhDJEL9jOAGIw5TlvRXBCgHEBUhC2xD96nL6nQd-o4wajuw9AP-lSyXZLbbk';
  const script = document.createElement('script');
  script.setAttribute('src', PAYPAL_SCRIPT);
  document.head.appendChild(script);
    <div className="w-screen bg-gradient-to-r from-red-600 to-red-900 py-20 centerAll">
        <div className="w-2/3 lg:w-1/2 xl:w-1/3">
            <img className="w-full" src={HomeHeaderIMG} alt="National Shrine of Saint Philomena"/>
        </div>
    </div>

)

export default HomeHeader
