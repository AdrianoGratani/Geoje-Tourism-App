import React from 'react';
import {ReactComponent as Geoje_sea} from "../../../img/geoje_beach.svg";
import {ReactComponent as Icon_sea} from "../../../img/beach.svg";
import {ReactComponent as Icon_LightHouse} from "../../../img/faro.svg";

import "./section_map_sea.css";

export default function Section_map_sea() {

    return (
        <div className='map_and_icons_container'>
            <div class="single_map_section_container_sea">
                <Geoje_sea class="geoje_land_svg" style={{ 
                    // min-width etc retains the svg size over browser size changes;
                    width: '700px', 
                    minWidth: '700px',
                    maxWidth: '700px',
                    height: '850px',
                    minHeight: '850px',
                    maxHeight: '850px',
                    margin: '1vw' 
                    }} />

                <div class="s0" id="s0">
                    {/* use 'style' to set position of the svg icon.  */}
                    <Icon_sea style={{ 
                        width: '1.6vw', 
                        height: 'auto' 
                        }} 
                    />
                    </div>

                <div class="s1" id="s1">
                    {/* use 'style' to set position of the svg icon.  */}
                    <Icon_LightHouse style={{ 
                        width: '1.6vw', 
                        height: 'auto' 
                        }} 
                    />
                </div>
            </div>

        </div>





    )

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
}

