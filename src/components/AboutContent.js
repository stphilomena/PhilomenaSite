import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";


const AboutContent = () => (

<div>
    <section id="about">

    <div className="centerAll">
        <div className="w-3/4 ">
            <div className="p-10 centerAll">
                <StaticImage className="lg:w-1/2" src="../images/shrine_of_st_philomena.jpg" alt="National Shrine of Saint Philomena" />
            </div>
            <div>
            The Shrine of Saint Philomena was originally located in Little Havana, Miami for about three decades. Since March of 2020, the Shrine merged with its sister church Our Lady of Victory in Davie.

<br />
<br />
“The catalyst for the merging of the two chapels was Covid-19,” said Fr. Samuel Fabula, the pastor of Our Lady of Victory. “The shutdowns and restrictions for Miami in Dade County were more restrictive than those for Davie in Broward County. When the faithful of St. Philomena were denied access to the church, the decision was made to combine the two parishes at Our Lady of Victory, which is also the larger chapel.”
<br />
<br />
“The name of the new church will be ‘Our Lady of Victory Church, and the National Shrine of St. Philomena,’” said Fr. Marc Vernoy, the prior of St. Thomas More Church in Sanford, FL. The eight priests of that priory service all the SSPX chapels in Florida.

<br />
<br />
Land was acquired with initial fund raising in January 2021. This land will be used to build a new church, rectory and future school.  Fund raising event in January 2022 will be used toward some of the actual construction of these facilities.
<br />
<br />
<Link to={"/forms"}><button className="border-l-2 border-red-500 text-left pl-10 bg-gray-100 hover:bg-gray-200 text-black py-5 w-full uppercase tracking-wider">
LEARN ABOUT FOUNDATIONAL MASSES
</button></Link>
<div className="py-10"></div>
</div>
 </div>
    </div>
  </section>
  </div>
)

export default AboutContent