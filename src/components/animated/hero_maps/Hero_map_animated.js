import React from "react";
import "./hero_map_animated.css";
import {ReactComponent as Geoje_land} from "./geoje_land.svg";
import {ReactComponent as Geoje_beach} from "./geoje_beach.svg";
import {ReactComponent as Geoje_islets} from "./geoje_islets.svg";
import text_data from "./text_data.js";

// fa icons:
import { FaMountainSun } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaPagelines } from "react-icons/fa6";


export default function Hero_map_animated( index ) {
    // index.index: 'land' or 'beach' or 'islets';

    const text_icons = [
        <FaMountainSun className="hero_icon icon_1"/>,
        <FaUmbrellaBeach className="hero_icon icon_2" />,
        <FaPagelines className="hero_icon icon_3"/>
    ];

    const svgMaps = ['land', 'beach', 'islets'];
    let current_hero_color_props_index = svgMaps.indexOf(index.index);       // find current prop in the map array.
    const svg_components = [<Geoje_land />, <Geoje_beach/>, <Geoje_islets/>]; // based on the current prop render one of these.
    const islets = index.index === svgMaps[2];         // for CSS class assignment: current props is 'islets'?

    const t = text_data;
    
    console.log(islets +". index prop: " + index.index + ". current map: " + svgMaps[current_hero_color_props_index]);   // debug
    return (
        <div class="svg_hero_container">
            <div class={`${islets ? 
                "svg_hero_map_container_islets" : 
                "svg_hero_map_container"}`}
                >
                {
                    svg_components[current_hero_color_props_index] || null
                }
            </div>
               
                <div class="svg_hero_map_text_container">
                    <h3 class="svg_hero_map_text_title">
                        All about the 
                        &#8287;
                        <span class={`hero_span hero_span_${current_hero_color_props_index}`}> 
                            <div class="svg_hero_map_text_icon">
                            {text_icons[current_hero_color_props_index]} 
                            </div> {t[current_hero_color_props_index]} </span> 
                            &#8287;
                            of Geoje.
                    </h3>
                </div>
        </div>
    )
}


// {/* btw for loops in JSX are NOT allowed. use .maps() instead */}