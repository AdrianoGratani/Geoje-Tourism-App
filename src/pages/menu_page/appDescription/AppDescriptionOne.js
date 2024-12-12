// history of Geoje, with pictures.
// this component has a search bar for locations too.

import React from 'react';
import "./appDescriptionOne.css";
import i from "./r1.png";
import ii from "./ii.png";
import iii from "./r2.png"

export default function AppDescriptionOne() {

    return (
        <div className='c'>

            <h5 className="p">The App Explained</h5>
            <h1 className='t'>Are you ready for new Discoveries?</h1>
            {/* three pictures and three explanation below with small subtitle */}

            <div className="sc">

                {/* how to use the map: icons and ext map */}
                <div className="se">
                    <section className='s'>
                        <div className="icc">
                            <div className="ic">
                                <img src={i} className='i' />
                            </div>
                        </div>
                        <h5 className='st'>Maps</h5>
                        <h2>
                            "EVERY spot at eyesight!"
                        </h2>
                        <p>Imagine you want to go to the beach and you don't want to drive for long hours...
                            let's find the closest location!
                            Each map has different icons related to different locations.
                            Hover (on Desktop) or click (on Mobile) on of the Icons to access all
                            the informations you need about a specific place.
                        </p>
                    </section>
                </div>

                {/* how to use the cards */}
                <div className="se">
                    <section className='s'>
                        <div className="icc">
                            <div className='ic'>
                                <img src={ii}  className='ii'/>
                            </div>
                        </div>
                        <h5 className='st'>Cards</h5>
                        <h2>"All the infos are here"</h2>
                        <p>
                            Is parking accessible? Kids can play safely?
                            What about restaurant and cafes?
                            See all the Icons in each Card? It's really THAT easy to know
                            if you can park your car nearby, and which one is the best cafe around...
                        </p>
                    </section>
                </div>

                <div className="se">
                    {/* find the locations, check the weather... */}
                    <section className='s'>
                        <div className="icc">
                            <div className='ic'>
                                <img src={iii}  className='iii' />
                            </div>
                        </div>
                        <h5 className='st'>Suggestions</h5>
                        <h2>"Mh... It's raining... What should I do?"</h2>
                        <p> Don't worry, we have all the answers for you!
                            Thanks to the OpenWeatherAPI data, you have access to real-time situation in
                            the Island: based on the current weather it'll suggest you what to do, and where to go...
                            even what to wear!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}