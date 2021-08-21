import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const Footer = () => (
    <section>
        <div className="flex justify-center bg-red-700 text-yellow-400 py-10">
            <div className="bg-red-700 grid grid-cols-1 sm:grid-cols-3 max-w-11/12">
                <div className="flex items-center justify-center">
                    <StaticImage className="h-20" src="../images/saint_philomena_shrine_logo.png" formats={["auto"]}
                                 alt="National Shrine of Saint Philomena"/>
                </div>
                <div>
                    <div>
                        <h2 class="font-bold text-white">QUICK LINKS</h2>
                        <ul>
                            <li><Link className="footerLink" to="/">Home</Link></li>
                            <li><Link className="footerLink" to="/philomena">About St Philomena</Link></li>
                            <li><Link className="footerLink" to="/shop">Shop Devotional Items</Link></li>
                            <li><Link className="footerLink" to="/about">About the Shrine></Link></li>
                            <li><Link className="footerLink" to="/schedule">Schedule a Visit</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-white">CONTACT US</h2>
                    National Shrine of Saint Philomena and Our Lady of Victory
                    <br/>
                    4580 SW 65th Avenue<br/>
                    Davie, FL 33314
                    <br/>
                    Tel: (305) 317-2331<br/>
                    <a className="footerLink" href="mailto:123@email.com">E-Mail: 123@email.com</a>
                </div>
            </div>
        </div>

        <div className="w-full bg-red-900 text-yellow-500 p-3 text-center">
            Copyright 2021 - All Rights Reserved
        </div>
    </section>
)

export default Footer