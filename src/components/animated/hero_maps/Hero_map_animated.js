import React from "react";
import "./hero_map_animated.css";
import {ReactComponent as Geoje_land} from "./geoje_land.svg";
import {ReactComponent as Geoje_beach} from "./geoje_beach.svg";
import {ReactComponent as Geoje_islets} from "./geoje_islets.svg";

export default function Hero_map_animated( index ) {
    // index.index: 'land' or 'beach' or 'islets';

    const svgMaps = ['land', 'beach', 'islets'];
    let current_hero_color_props_index = svgMaps.indexOf(index.index);       // find current prop in the map array.
    const svg_components = [<Geoje_land />, <Geoje_beach/>, <Geoje_islets/>]; // based on the current prop render one of these.
    const islets = index.index === svgMaps[2];         // for CSS class assignment: current props is 'islets'?
    
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
        </div>
    )
}


// {/* btw for loops in JSX are NOT allowed. use .maps() instead */}

            // hero map rendering, old version (flawed):
            //     {/* <Geoje_land /> */}
            //     {svg_components[0]}
            // </div>
            // <div class={`svg_hero_map_container ${svgMaps[1] === current_hero_color_props ? "svg_map_compares" : ''}`}>
            //     <Geoje_beach />
            // </div>
            // <div class={`svg_hero_map_container_islet ${svgMaps[2] === current_hero_color_props ? "svg_map_compares_islets" : ''}`} >
            //     <Geoje_islets />