import React from 'react';
import {ReactComponent as Geoje_islets} from "../../../img/geoje_islets.svg";
import {ReactComponent as Svg_islets} from "../../../img/islet.svg";

import "./section_map_islets.css";


export default function Section_map_islets() {

    return (
        <div class="map_and_icons_container">

            {/* map svg */}            
            <div class="single_map_section_container islet_map">
                <Geoje_islets class="geoje_islets_svg" style={{ 
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

                <div class="is0" id="is0">
                    {/* use 'style' to set position of the svg icon.  */}
                    <Svg_islets style={{ 
                        width: '1.6vw', 
                        height: 'auto' 
                        }} 
                    />
                </div>
                <div class="is1" id="is1">
                    {/* use 'style' to set position of the svg icon.  */}
                    <Svg_islets style={{ 
                        width: '1.6vw', 
                        height: 'auto' 
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}