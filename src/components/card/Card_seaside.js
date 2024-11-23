import React from 'react';
import { useCardContext } from '../../context/CardContext';
import { useEffect } from 'react';


import "./card_style.css";

// icons:
import { FaHouseTsunami } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaGlassWaterDroplet } from "react-icons/fa6";


export default function Card_seaside({ card_data }) {

    // CONTEXT:
    const {
        // context data for ext card:
        currentlyClickedCardID, setCurrentlyClickedCardID,
        // context data for icon/card events:
        currentlyHoveredIcon, setCurrentlyHoveredIcon,
        currentlyHoveredCard, setCurrentlyHoveredIconCard,
        } = useCardContext();

    // props data:
    let c = card_data;
    let seaside_card_data_keys = {
        n : c.name,
        id: c.id,
        s : c.sand,
        p : c.parking,
        c : c.cafes,
    };

    function set_context_currently_hovered_card(card_id) {
        setCurrentlyHoveredIconCard(card_id);
    }
    function remove_context_currently_hovered_card() {
        setCurrentlyHoveredIconCard(null);
    }
    // debug
    // function k(id) {
    //     if(id === currentlyHoveredIcon) {
    //         console.log((currentlyHoveredIcon === id) + "in " + id)
    //         return id === currentlyHoveredIcon;
    //     }
    // }

    
    
    // useEffect(()=> {
    //     // console.log(". currently hovered icon: " + currentlyHoveredIcon);      // debug;
    //     console.log("currentrly hovered card: " + currentlyHoveredCard);
    // }, [currentlyHoveredCard])

    return (
        // [LAYOUT] upper line: name;  lower line: infos.
        <div className={`${ currentlyHoveredIcon === card_data.id ? "s_card_effect" : ""} card_seaside_container  `}
            // event listeners for card_icon events, based on the context data
            onMouseEnter={ ()=> set_context_currently_hovered_card(seaside_card_data_keys.id) }
            onMouseLeave={ ()=> remove_context_currently_hovered_card() } 
            >
            {/* name takes a full line. */}
            <h1 className="card_name_seaside">
                <div className="icon_container_seaside">
                    <FaHouseTsunami class="icon_sea"/>
                </div>
                <div className="seaside_text">
                    {/* {k(c.id)} */}
                    {seaside_card_data_keys.n}
                </div>
            </h1>

             {/* additional card infos take one line altogether. */}
            <div class="card_additional_infos_sea">

                <h4 className="card_sand">
                    <div className="icon_container_seaside">
                        <FaUmbrellaBeach class="icon_sea"/>     
                    </div>
                    <div className="seaside_text">
                        {seaside_card_data_keys.s}
                    </div>
                </h4>

                <h4 className="card_name_parking">
                    <div className="icon_container_seaside">
                        <FaCaravan class="icon_sea"/>
                    </div>
                    <div className="seaside_text">
                        {seaside_card_data_keys.p}
                    </div>
                </h4>
                
                <h4 className="card_name_cafes">
                    <div className="icon_container_seaside">
                        <FaGlassWaterDroplet class="icon_sea"/>
                    </div>
                    <div className="seaside_text">
                        {seaside_card_data_keys.c}
                    </div>
                </h4>
             </div>
            
        </div>
    )
}