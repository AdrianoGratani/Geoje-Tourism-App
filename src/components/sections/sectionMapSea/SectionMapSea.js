import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import locations_data from '../../../locations_data/locations_data';
// import { useEffect, useState } from 'react';

// icons:
import {ReactComponent as GeojeSea} from "../../../img/geoje_beach.svg";
import {ReactComponent as IconSea} from "../../../img/beach.svg";
// import {ReactComponent as Icon_LightHouse} from "../../../img/faro.svg";

import "./section_map_sea.css";

export default function SectionMapSea() {


    // CONTEXT DATA
    const {
                // data for icon/card events:
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
        setCurrentlyVisitedSection("seaside");
        setToggle_animation(true);
        setCardIsClicked(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCard_data_for_ext_card(location_data);
    }
    // click to remove the card:
    function triggerExtCard() {
        setToggle_animation(false);
        setCurrentlyHoveredIcon(null);      
        }

    return (
            // {/* SVG MAP */}
            <div class="single_map_section_container_sea"
            onClick={()=> resetContextData()}
            >
                <GeojeSea class="sea_geoje_land_svg" style={{ 
                }} />

                {/* SVG ICON */}
                    {
                        locations_data.seaside.map((sea_location) => (
                            <div id="s_icon_container"
                            onMouseEnter={()=> send_icon_id_to_context(sea_location.id, sea_location)}
                            onClick={()=>triggerExtCard()}

                            // onMouseLeave={()=> remove_currently_hovered_icon_context()}
                            style={{
                                position: 'absolute',
                                // backgroundColor: 'yellow',                               
                                top: `${sea_location.top}px`,
                                left: `${sea_location.left}px`,
                                width: 'fit-content',
                                height: 'fit-content',
                            }}
                            //  
                            className={ `s_icon_container 
                                        ${currentlyHoveredCard === sea_location.id
                                          ? "seaside_hovered_card_icon_effect"
                                          : ""
                                        }`
                                    }
                            >
                                {/* {sea_location.id} */}
                               <IconSea 
                                    style={{
                                        width: '31px', 
                                        minWidth: '31px',
                                        maxWidth: '31px',
                                        height: '31px',
                                        minHeight: '31px',
                                        maxHeight: '31px',
                                        margin: '3px',
                                    }}
                               /> 
                            </div>
                        ))
                    }
            </div>
    )
}