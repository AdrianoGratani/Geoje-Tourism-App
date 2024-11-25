import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import locations_data from '../../../locations_data/locations_data';


// icons:
import {ReactComponent as Geoje_sea} from "../../../img/geoje_beach.svg";
import {ReactComponent as Icon_sea} from "../../../img/beach.svg";
import {ReactComponent as Icon_LightHouse} from "../../../img/faro.svg";

import "./section_map_sea.css";

export default function Section_map_sea() {

    // CONTEXT DATA
    const {
            // data for icon/card events:
            currentlyHoveredIcon, setCurrentlyHoveredIcon,
            currentlyHoveredCard, setCurrentlyHoveredIconCard,
    } = useCardContext();

    function check_hovered_card(current_icon_id) {
        if(currentlyHoveredCard === current_icon_id){
            return 1;
        }
    }

    function set_currently_hovered_icon_context(icon_id) {
        setCurrentlyHoveredIcon(icon_id);   
    }
    function remove_currently_hovered_icon_context() {
        setCurrentlyHoveredIcon(null);   
    }
    
    return (
        <div className='map_and_icons_container'>
            {/* SVG MAP */}
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

                {/* SVG ICON */}
                    {
                        locations_data.seaside.map((sea_location) => (
                            <div id="s_icon_container"
                            onMouseEnter={()=> set_currently_hovered_icon_context(sea_location.id)}
                            onMouseLeave={()=> remove_currently_hovered_icon_context()}
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
                               <Icon_sea 
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
        </div>
    )
}