import React from 'react';
// import { useEffect, useState } from 'react';
import {ReactComponent as GeojeIslets} from "../../../img/geoje_islets.svg";
import {ReactComponent as SvgIslets} from "../../../img/islet.svg";
import { useCardContext } from '../../../context/CardContext';
import "./section_map_islets.css";
import { useScreenContext } from '../../../context/ScreenSizeContext';
import locations_data from '../../../locations_data/locations_data';

export default function Section_map_islets() {
    const icons_islets_data = locations_data.islets;                                                // data for icon positioning.
    const {es} = useScreenContext();

    // CONTEXT DATA for icon layout - card layout interactions:
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
        setCurrentlyVisitedSection("islets");
        setCard_data_for_ext_card(location_data);
    }

    function triggerExtCard() {
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);
    }
    
    return (

            <div class="single_map_section_container_islets"
            onClick={()=> resetContextData()}
            >
                {/* .geoje_islets_svg is JUST for original _colors_ */}

                {
                    es() !== 'mobile' 
                    ?    <GeojeIslets class="geoje_islets_svg" style={{ 
                         }} />

                    :     <GeojeIslets class="geoje_islets_svg" style={{ 
                            width: '90vw',
                            minWidth: '90vw',
                            maxWidth: '90vw',
                    }} />
                }
             
            {
                icons_islets_data.map((islet)=> (

                    <div 
                    className={`is_icon_container ${currentlyHoveredCard === islet.id
                                                    ? "is_icon_effect"
                                                    : ""                                
                    }`}

                    onMouseEnter={()=> send_icon_id_to_context(islet.id, islet)}
                    onClick={()=> triggerExtCard()}
                    style={{
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        top:  es()!=='mobile' ? `${islet.top}px` : `${islet.mtop}px`,
                        left: es()!=='mobile' ? `${islet.left}px`: `${islet.mleft}vw`,
                    }}
                    >
                    {/* {islet.id} */}
                        <SvgIslets
                            style={{
                                width:  es()!=='mobile'? '35px' : '19px', 
                                minWidth:  es()!=='mobile'? '35px' : '19px',
                                maxWidth:  es()!=='mobile'? '35px' : '19px',
                                height:  es()!=='mobile'? '35px' : '19px',
                                minHeight:  es()!=='mobile'? '35px' : '19px',
                                maxHeight:  es()!=='mobile'? '35px' : '19px',
                                margin: '3px',
                            }}
                        />
                    </div>
                ))
            }
            </div>
    )
}