import React from "react";

import HeroMapAnimated from "./animated/hero_maps/HeroMapAnimated";
import "../pages/menu_page/menu_page.css";
import { useScreenContext } from "../context/ScreenSizeContext";


export default function Hero ({hero_geoje_current_color}) {

    const {currentScreenWidthContext, screenMode} = useScreenContext();
    
    return (

        <div>
             <div className="hero_container">
                {/* hero text */}
                {currentScreenWidthContext > 1400 ? 
                    <div className="hero_text_container">
                        <h1><span className={`hero_geoje ${hero_geoje_current_color} `}>Everything</span> 

                        {currentScreenWidthContext > 1400 && <br />}

                        about  <span className={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. 

                        {currentScreenWidthContext > 1400 && <br />}

                            In one Place. 

                        {currentScreenWidthContext > 1400 && <br />}
                        </h1>
                    </div>
                    
                    :   <span 
                        className={`hero_geoje  ${hero_geoje_current_color} `}>{
                            currentScreenWidthContext > 600 && screenMode !== 'mobile' ?
                            `Everything About Geoje. In one Place.` : "Geoje Mobile App"
                        }
                        </span>
                }
                {/* hero maps */}
                    <div className="hero_maps_and_description_container">
                        <div className="hero_maps_container">
                            <HeroMapAnimated index={hero_geoje_current_color}/>
                        </div>
                       
                    </div>
            </div>
        </div>
    )
}