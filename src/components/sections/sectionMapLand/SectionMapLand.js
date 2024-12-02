import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import { useScreenContext } from '../../../context/ScreenSizeContext';
import {ReactComponent as GeojeLand} from "../../../img/geoje_land.svg";
import {ReactComponent as IconHike} from "../../../img/hike.svg";
import locations_data from '../../../locations_data/locations_data';
import "./section_map_land.css";

export default function SectionMapLand() {
    // render differnt svg for mobile
    const {es} = useScreenContext();

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
    }

    function triggerExtCard() {
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);
    }
    
    return (
            <div class="single_map_section_container_land"
                        onClick={()=> resetContextData()}
                        >
                {
                    es() !== 'mobile'
                        ?  <GeojeLand className=" geoje_land_svg" style={{ 
                            }} />
                        :  <GeojeLand className=" geoje_land_svg" style={{ 
                            width: '68vw'
                            }} />
                }
                {
                    locations_data.mainland.map((location) => (
                        <div 
                        class={`m_icon_container ${currentlyHoveredCard === location.id
                                                    ? "m_icon_effect"
                                                    : ""    
                                                    }`} 
                        onMouseEnter={()=>send_icon_id_to_context(location.id, location)}
                        onMouseLeave={()=>remove_icon_id_from_context()}
                        onClick={()=> triggerExtCard()}
                            style={{
                                position: 'absolute',
                                top:  es()!=='mobile' ? `${location.top}px` : `${location.mtop}px`,
                                left: es()!=='mobile' ? `${location.left}px`: `${location.mleft}vw`,
                                width: 'fit-content',
                                height: 'fit-content',
                            }}>
                            <IconHike style={{
                                 width:  es()!=='mobile'? '31px' : '19px', 
                                 height: es()!=='mobile'? '31px' : '19px',
                                 margin: es()!=='mobile'?  '3px' : '1px',
                            }}/> 
                        </div>
                    ))
                }
            </div>
    )
}

// for mobile
// <IconHike style={{
//     width: '21px', 
//     minWidth: '21px',
//     maxWidth: '21px',
//     height: '21px',
//     minHeight: '21px',
//     maxHeight: '21px',
//     margin: '3px',
// }}/>