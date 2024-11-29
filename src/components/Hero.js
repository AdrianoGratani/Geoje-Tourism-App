import React from "react";

import HeroMapAnimated from "./animated/hero_maps/HeroMapAnimated";
import "../pages/menu_page/menu_page.css";

export default function Hero ({hero_geoje_current_color}) {

    return (
        <div>
             <div className="hero_container">
                {/* hero text */}
                    <div className="hero_text_container">
                        <h1><span className={`hero_geoje ${hero_geoje_current_color} `}>Everything</span> <br/>
                        about  <span className={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. <br/> 
                            In one Place. <br />
                        </h1>
                    </div>
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