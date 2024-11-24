import React from 'react';
import {ReactComponent as Geoje_islets} from "../../../img/geoje_islets.svg";
import {ReactComponent as Svg_islets} from "../../../img/islet.svg";

import "./section_map_islets.css";

// icon data rendering:
import locations_data from '../../../locations_data/locations_data';


export default function Section_map_islets() {
    const icons_islets_data = locations_data.islets;

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
 
            
            {
                icons_islets_data.map((islet)=> (
                    <div 
                    className="is_icon_container"
                    style={{
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        top: `${islet.top}px`,
                        left: `${islet.left}px`,
                    }}
                    >

                        <Svg_islets
                            style={{
                                width: '24px', 
                                minWidth: '24px',
                                maxWidth: '24px',
                                height: '24px',
                                minHeight: '24px',
                                maxHeight: '24px',
                                margin: '3px',
                            }}
                        />
                    </div>
                ))
            }
            </div>
        </div>
    )
}