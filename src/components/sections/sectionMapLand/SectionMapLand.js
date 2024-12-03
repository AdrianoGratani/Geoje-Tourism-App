import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import { useScreenContext } from '../../../context/ScreenSizeContext';
import {ReactComponent as GeojeLand} from "../../../img/geoje_land.svg";
import {ReactComponent as IconHike} from "../../../img/hike.svg";
import locations_data from '../../../locations_data/locations_data';
import "./section_map_land.css";
import SecTextMob from '../SecTextMob';


export default function SectionMapLand() {
    // render differnt svg for mobile
    const {es} = useScreenContext();

    const { 
        cmi, setCmi, setMc,
        resetContextData,
        setToggle_animation,
        setCurrentlyHoveredIcon, 
        currentlyHoveredCard,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setClickedIcon,
        setCard_data_for_ext_card,
    } = useCardContext(); 

    //  DESKTOP VERSION:  ___ON HOVER IT SHOWS THE EXT CARD  ______NOT_____ ON CLICK
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

    function triggerExtCard(id, l) {                       // SAME FUNCTION FOR MOBILE AND DESKTOP
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);

            if(es()=='mobile') {    // set which mobile card must appear and give it data.
                setCmi(id);
                setMc(l);                
            }  
    }

    // mobile icon position evaluator
    function evalmp(p, ii) {     //  if icon clicked, repostion to display their text.
        if ( ii === cmi)  // if the id is same as context data id for mobile icon reposition to top left
        {
            return 0;
        } else {         // otherwise return the arg invaried.
            return p;
        }
    }
    
    return (
            <div class="single_map_section_container_land"
                        onClick={()=> resetContextData()}
                        >
                {                                                               // MAP SVG
                    es() !== 'mobile'
                        ?  <GeojeLand className=" geoje_land_svg" style={{ 
                            }} />
                        :  <GeojeLand className=" geoje_land_svg" style={{ 
                            width: '68vw'
                            }} />
                }
                {                                                               // ICONS SVG
                    locations_data.mainland.map((location) => (
                        <div 
                        class={`m_icon_container ${currentlyHoveredCard === location.id
                                                    ? "m_icon_effect"
                                                    : ""    
                                                    }`} 
                        onMouseEnter={()=>send_icon_id_to_context(location.id, location)}
                        onMouseLeave={()=>remove_icon_id_from_context()}
                        onClick={()=> triggerExtCard(location.id, location)}  
                            style={{
                                position: 'absolute',
                                // ON MOBILE vw is used for both x and y axis... it works.
                                top:  es()!=='mobile' ? `${location.top}px` : `${evalmp(location.mtop, location.id)}vw`,
                                left: es()!=='mobile' ? `${location.left}px`: `${evalmp(location.mleft, location.id)}vw`,
                                width: 'fit-content',
                                height: 'fit-content',
                            }}>
                         
                            <IconHike style={{
                                 width:  es()!=='mobile'? '31px' : '15px', 
                                 height: es()!=='mobile'? '31px' : '15px',
                                 margin: es()!=='mobile'?  '3px' : '1px',
                            }}/> 

                                    {/* on mobile devices info cards is generated from the icon. */}
                            {
                                es() === 'mobile'
                                 ?
                                 <div> 
                                    {
                                        location.id === cmi && cmi !== null
                                        ? <SecTextMob /> 
                                        : null
                                    }
                                 </div>
                                 : null
                            }
                        </div>
                    ))
                }
            </div>
    )
}
