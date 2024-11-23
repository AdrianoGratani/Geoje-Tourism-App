import React from 'react';
import locations_data from "../../../locations_data/locations_data";
import { useCardContext } from '../../../context/CardContext';
import { useEffect } from 'react';
/*
    icons are SVG. to position each icon within the map svg, and make everything interactive, I treat them as React components inside <div> containers.
    to move them, change size, change color, add-remove classes for interactivity, I use their div container.
*/ 

import {ReactComponent as Geoje_land} from "../../../img/geoje_land.svg";
import {ReactComponent as IconHike} from "../../../img/hike.svg";
import {ReactComponent as IconCableCar} from "../../../img/cable.svg"
import {ReactComponent as LightHouse} from "../../../img/faro.svg"


// for incon rendering: a loop over the mainland array.

import "./section_map_land.css";

export default function Section_map_land() {

    // CONTEXT:
    const { 
        currentlyHoveredIcon, setCurrentlyHoveredIcon, currentlyHoveredCard 
    } = useCardContext(); 

    function send_icon_id_to_context(location_id) {
        setCurrentlyHoveredIcon(location_id)
    }
    function remove_icon_id_from_context() {
        setCurrentlyHoveredIcon(null);
    }
    
    useEffect(()=> {
        console.log(". currently hovered icon: " + currentlyHoveredIcon);      // debug;
    }, [currentlyHoveredIcon])

    return (

        <div class="map_and_icons_container">

            {/* map svg */}
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
                
                {
                    locations_data.mainland.map((location) => (
                        // icon container
                        <div 
                        class={`m_icon_container ${currentlyHoveredCard === location.id
                                                    ? "m_icon_effect"
                                                    : ""    
                                                    }`} 
                        onMouseEnter={()=>send_icon_id_to_context(location.id)}
                        onMouseLeave={()=>remove_icon_id_from_context()}
                            style={{
                                position: 'absolute',
                                top: `${location.top}px`,
                                left:`${location.left}px`,
                                width: 'fit-content',
                                height: 'fit-content',
                            }}>
                                {/* icon */}
                                    {/* debug: {location.name} */}
                            <IconHike style={{
                                 width: '24px', 
                                 minWidth: '24px',
                                 maxWidth: '24px',
                                 height: '24px',
                                 minHeight: '24px',
                                 maxHeight: '24px',
                                 margin: '3px',
                            }}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}