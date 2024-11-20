import React from 'react';
/*
    icons are SVG. to position each icon within the map svg, and make everything interactive, I treat them as React components inside <div> containers.
    to move them, change size, change color, add-remove classes for interactivity, I use their div container.
*/ 

import {ReactComponent as Geoje_land} from "../../../img/geoje_land.svg";
import {ReactComponent as IconHike} from "../../../img/hike.svg";
import {ReactComponent as IconCableCar} from "../../../img/cable.svg"
import {ReactComponent as LightHouse} from "../../../img/faro.svg"

import "./section_map_land.css";

export default function Section_map_land() {

    return (

        <div class="map_and_icons_container">

            {/* map svg */}
            <div class="single_map_section_container_land">
                <Geoje_land className="geoje_land_svg" style={{ 
                    // min-width etc retains the svg size over browser size changes;
                    width: '700px', 
                    minWidth: '700px',
                    maxWidth: '700px',
                    height: '850px',
                    minHeight: '850px',
                    maxHeight: '850px',
                    margin: '1vw' 
                    }} 
                />

            {/* map icons svg ------>  use .map() to generate them dynamically, 
            with INLINE CSS for the container too. the container must have an ID
                retrieve cohordinates for top and left from an array of objects:
                MountainLocations = [
                    {
                        name: LocationName,
                        top: x,
                        y: y
                    },
                    {
                        name: LocationName,
                        top: x,
                        y: y
                    },
                    ...etc ...etc
                ]
            */}
            <div class="i0" id="i0">
                {/* use 'style' to set position of the svg icon.  */}
                <IconHike style={{ 
                    width: '1.6vw', 
                    height: 'auto' 
                    }} 
                />
            </div>
            <div class="i1" id="i0">
                {/* use 'style' to set position of the svg icon.  */}
                <IconHike style={{ 
                    width: '1.6vw', 
                    height: 'auto' 
                    }} 
                />
            </div>
            </div>
        </div>
    )
}