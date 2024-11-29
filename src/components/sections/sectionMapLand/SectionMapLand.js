import React from 'react';
import { useCardContext } from '../../../context/CardContext';
// import { useEffect, useState } from 'react';
/*
    icons are SVG. to position each icon within the map svg, and make everything interactive, I treat them as React components inside <div> containers.
    to move them, change size, change color, add-remove classes for interactivity, I use their div container.
*/ 

import {ReactComponent as GeojeLand} from "../../../img/geoje_land.svg";
import {ReactComponent as IconHike} from "../../../img/hike.svg";
// import {ReactComponent as IconCableCar} from "../../../img/cable.svg"
// import {ReactComponent as LightHouse} from "../../../img/faro.svg"

import locations_data from '../../../locations_data/locations_data';


// for incon rendering: a loop over the mainland array.
import "./section_map_land.css";
// import Card_islet from '../../card/Card_islet';

export default function SectionMapLand() {

    // const mainland_data = locations_data.mainland;

    // CONTEXT aND SETTERS:
    const { 
        resetContextData,
        setToggle_animation,
        setCurrentlyHoveredIcon, 
        currentlyHoveredCard,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setClickedIcon,
        setCard_data_for_ext_card,
    } = useCardContext(); 

    // ___ON HOVER
    function send_icon_id_to_context(location_id, location_data) {
        setToggle_animation(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCardIsClicked(true);
        setCurrentlyVisitedSection("mainland");
        setCard_data_for_ext_card(location_data);
    }
    function remove_icon_id_from_context() {
        // setToggle_animation(false);
        //     setCurrentlyHoveredIcon(null);
        //     setClickedIcon(null);
        //     setCardIsClicked(false);
        //     setCurrentlyVisitedSection(null);
        //     setCard_data_for_ext_card(null);
    }

    function triggerExtCard() {
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);
            // setClickedIcon(null);
            // setCardIsClicked(false);
            // setCurrentlyVisitedSection(null);
            // setCard_data_for_ext_card(null);
    }
    
    // useEffect(()=> {
    // console.log(
    //     cardIsClicked, currentlyVisitedSection
    // )
        // console.log(". currently hovered icon: " + currentlyHoveredIcon);      // debug;
    // }, [])

    return (
            <div class="single_map_section_container_land"
                        onClick={()=> resetContextData()}
                        >

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
                <GeojeLand className="geoje_land_svg" style={{ 
                    // min-width etc retains the svg size over browser size changes;
                    }} 
                />
                
                {/* svg icons: */}
                {
                    // locations_data.mainland.map((location) => (
                    //     // icon container
                    //     <div 
                    //     class={`m_icon_container ${currentlyHoveredCard === location.id
                    //                                 ? "m_icon_effect"
                    //                                 : ""    
                    //                                 }`} 
                    //     onMouseEnter={()=>send_icon_id_to_context(location.id, location)}
                    //     onMouseLeave={()=>remove_icon_id_from_context()}
                    //     onClick={()=> triggerExtCard()}
                    //         style={{
                    //             position: 'absolute',
                    //             top: `${location.top}px`,
                    //             left:`${location.left}px`,
                    //             width: 'fit-content',
                    //             height: 'fit-content',
                    //         }}>
                    //             {/* icon */}
                    //             {/* debug: {location.name} */}
                    //         <IconHike style={{
                    //              width: '31px', 
                    //              minWidth: '31px',
                    //              maxWidth: '31px',
                    //              height: '31px',
                    //              minHeight: '31px',
                    //              maxHeight: '31px',
                    //              margin: '3px',
                    //         }}/>
                    //     </div>
                    // ))
                }
            </div>
    )
}