import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { USD_P2 } from "../helpers/NumberHelper"

const HomeContent = () => {
  return (
    <div>
      <div className="">
        <section id="philomena">
          <div className="bg-gradient-to-tl from-yellow-800 via-yellow-500 to-yellow-200 centerAll">
            <div className="max-w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                <div className="pt-20">
                  <div className="centerAll">
                    <StaticImage
                      src="../images/st_philomena.png"
                      alt="Saint Philomena"
                    />
                  </div>
                </div>
                <div className="w-full p-5 centerAll bg-red-700 md:bg-transparent">
                  <div>
                    <h1 className="text-white font-black text-5xl">
                      ABOUT SAINT PHILOMENA
                    </h1>
                    <br />
                    <p className="md:w-3/4 text-white">
                      On May 24th, 1802, cleaning and clearing work was in
                      progress in the most ancient of all the catacombs in Rome,
                      the St. Priscilla catacombs, which dated almost from
                      apostolic times. One of the workers, while digging in one
                      of the ancient tunnels, by accident found a shelf-tomb
                      that had never been opened. (Most of the graves in this
                      cemetery had been opened, and their relics removed for
                      safety.) The tomb was clearly the tomb of a martyr, with
                      rough inscriptions including arrows, a lance, an anchor, a
                      lily or flame, and the words: PAX TECUM FILUMENA
                    </p>
                    <br />

                    <Link to="/philomena">
                      <button className="shadow-lg py-5 px-7 font-bold text-lg transform scale-100 rounded-full bg-yellow-500 md:bg-red-700 text-white hover:scale-105">
                        LEARN MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section id="shop">
          <div className="py-10 bg-gray-200 flex justify-center content-center">
            <div className="w-11/12">
              <div>
                <h2 className="font-black text-4xl text-center text-red-900">
                  DEVOTIONAL ITEMS
                </h2>
              </div>
              <div className=""></div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section id="about">
          <div className="bg-gradient-to-tl from-blue-300 via-blue-100 to-white centerAll">
            <div className="max-w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                <div className="pt-10">
                  <div className="centerAll w-11/12">
                    <StaticImage
                      className="centerAll w-2/3 md:w-5/6 lg:w-2/3"
                      src="../images/our_lady_of_victory_chapel.png"
                      alt="Our Lady of Victory in Davie Florida"
                    />
                  </div>
                </div>

                <div className="w-full p-5 centerAll bg-white md:bg-transparent">
                  <div className="w-full">
                    <h1 className="text-blue-700 font-black text-5xl">
                      ABOUT US
                    </h1>
                    <div className="md:w-3/4">
                      <p>
                        <br />
                        The national shrine of St. Philomena in south Florida is
                        operated by the Society of St. Pius X. Owing to the
                        difficulties caused in the past year by the Coronavirus,
                        the shrine was moved 25 miles north from its Little
                        Havana home in Miami north to Our Lady of Victory in
                        Davie, FL. The last Mass for the shrine at the Miami
                        location was March 22nd, 2020. <br />
                        <br />
                        “The catalyst for the merging of the two chapels was
                        Covid-19,” said Fr. Samuel Fabula, the pastor of Our
                        Lady of Victory. “The shutdowns and restrictions for
                        Miami in Dade County were more restrictive than those
                        for Davie in Broward County. When the faithful of St.
                        Philomena were denied access to the church, the decision
                        was made to combine the two parishes at Our Lady of
                        Victory, which is also the larger chapel.”
                      </p>
                      <br />
                      <br />
                      <Link to="/about">
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                          CONTINUE READING
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*
<div className="centerAll">
<section className="">
<div className="py-10">
    <iframe className="h-120 w-screen" src="https://fsspx.today/chapel/fl-davie/" title="Calendar for the National Shrine of Saint Philomena"></iframe>
</div>
</section>
</div>
                    */}

      <div>
        <section id="contact">
          <div className="bg-gradient-to-l from-gray-300 to-white centerAll">
            <div className="max-w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                <div className="py-10">
                  <div className="centerAll">
                    <StaticImage
                      className="relative w-4/5 mb-0"
                      src="../images/St-Philomena-Relic.png"
                      alt="Blessed Relic of Saint Philomena at the National Shrine"
                    />
                  </div>
                </div>

                <div class="klaviyo-form-Xb5i9a"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeContent
