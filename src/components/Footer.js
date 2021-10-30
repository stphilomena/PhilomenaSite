import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const Footer = () => (
    <section>
        <div className="flex justify-center bg-red-700 text-yellow-400 py-10">
            <div className="bg-red-700 grid grid-cols-1 sm:grid-cols-3 max-w-11/12 gap-4">
                <div className="centerAll">
                    <StaticImage className="h-auto w-2/3" src="../images/saint_philomena_shrine_logo.png" formats={["auto"]}
                                 alt="National Shrine of Saint Philomena"/>
                </div>
                <div className="px-5">
                    <div>
                        <h2 className="font-bold text-white">QUICK LINKS</h2>
                        <ul>
                            <li><Link className="footerLink" to="http://www.shrineofstphilomena.com">Home</Link></li>
                            <li><Link className="footerLink" to="http://www.shrineofstphilomena.com/philomena">About St Philomena</Link></li>
                            <li><Link className="footerLink" to="http://www.shrineofstphilomena.com/shop">Shop Devotional Items</Link></li>
                            <li><Link className="footerLink" to="http://www.shrineofstphilomena.com/about">About the Shrine</Link></li>
                            <li><Link className="footerLink" to="http://www.shrineofstphilomena.com/contact">Schedule a Visit</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="px-5">
                    <h2 className="font-bold text-white">CONTACT US</h2>
                    National Shrine of Saint Philomena and Our Lady of Victory
                    <br/>
                    4580 SW 65th Avenue<br/>
                    Davie, FL 33314
                    <br/>
                    Tel: (954) 998-2848<br/>
                    <a className="footerLink" href="shrineofphilomena@gmail.com">E-Mail: shrineofphilomena@gmail.com</a>
                </div>
            </div>
        </div>

        <div className="w-full bg-red-900 text-yellow-500 p-3 text-center">
            Copyright 2021 - All Rights Reserved
        </div>
    </section>
)

export default Footer