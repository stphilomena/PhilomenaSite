import * as React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Footer = () => (
<section>
<div class="flex justify-center bg-red-700 text-yellow-400 py-10">
<div class="bg-red-700 grid grid-cols-1 sm:grid-cols-3 max-w-11/12">
    <div class="flex items-center justify-center">
        <StaticImage class="h-20" src="../images/saint_philomena_shrine_logo.png" formats={["auto"]} alt="National Shrine of Saint Philomena"/>
    </div>
<div>
    <div>
        <h2 class="font-bold text-white">QUICK LINKS</h2>
        <ul>
       <li><a class="footerLink" href="#">Home</a></li>
       <li><a class="footerLink" href="#">About St Philomena</a></li>
        <li><a class="footerLink" href="#">Shop Devotional Items</a></li>
        <li><a class="footerLink" href="#">About the Shrine</a></li>
        <li><a class="footerLink" href="#">Schedule a Visit</a></li>
    </ul>
    </div>
</div>
<div>
    <h2 class="font-bold text-white">CONTACT US</h2>
    National Shrine of Saint Philomena and Our Lady of Victory
    <br/>
    4580 SW 65th Avenue<br/>
    Davie, FL 33314
    <br/>
    Tel: (305) 317-2331<br/>
    <a class="footerLink" href="#">E-Mail: 123@email.com</a>
</div>
</div>
</div>

        <div class="w-full bg-red-900 text-yellow-500 p-3 text-center">
            Copyright 2021 - All Rights Reserved
        </div>
    </section>
    )

    export default Footer