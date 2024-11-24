import React from 'react';
import { useEffect } from 'react';
import { GiIsland } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa6";
import { FaBridgeWater } from "react-icons/fa6";

// import the utility to USE the context useState data:
import { useCardContext } from '../../context/CardContext';

import "./card_style.css";

export default function Card_islet({card_data}) {

    // CONTEXT DATA:
    const { 
        cardIsClicked, setCardIsClicked,
        currentlyVisitedSection, setCurrentlyVisitedSection,
        currentlyClickedCardID, setCurrentlyClickedCardID,
        // data for hovering: 
        currentlyHoveredIcon, setCurrentlyHoveredIcon,
        currentlyHoveredCard, setCurrentlyHoveredIconCard,  
    } = useCardContext();

    // props data:
    let c = card_data;
    let islets_card_data_keys = {
        id: c.id,
        // short card data
        n : c.name,
        c : c.car,
        b : c.bridge,
        // expanded card data.
        s : c.sand,
        e : c.eat,
    };

    function set_context_currently_hovered_card(islet_card_id) {
        setCurrentlyHoveredIconCard(islet_card_id);
    }

    //debug:
    // useEffect(()=> {
    //     console.log(currentlyHoveredCard)
    // },[currentlyHoveredCard]);

    return (
        // upper line: name;  lower line: infos.

        <div
            // check if the icon for this card is being hovered: 
            className={`card_islets_container 
                        ${currentlyHoveredIcon === card_data.id
                          ? "is_card_effect"
                          : ""
                        }`}
            // event listener to set the context data:
            onMouseEnter={()=> set_context_currently_hovered_card(card_data.id)}
            onMouseLeave={()=> set_context_currently_hovered_card(null)}
        >

            {/* name takes a full line. */}
            <h1 className="card_name_islets">
                <div className="icon_container_islets">
                    <GiIsland />
                </div>
                <div className="islets_text">
                    {islets_card_data_keys.n}
                </div>
            </h1>

            {/* additional card infos take one line altogether. */}
            <div class="card_additional_infos">
                <h4 className="card_name_bycar">
                    <div className="icon_container_islets">
                        <FaCarSide />
                    </div>
                    <div className="islets_text">
                        {islets_card_data_keys.c}
                    </div>
                </h4>
                <h4 className="card_name_bridge">
                    <div className="icon_container_islets">
                        <FaBridgeWater />
                    </div>
                    <div className="islets_text">
                        {islets_card_data_keys.b}
                    </div>
                </h4>
            </div>
        </div>
    )
}