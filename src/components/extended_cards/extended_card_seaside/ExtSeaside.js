import React from 'react';    // CONTEXT:
import { useState } from 'react';
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";

export default function ExtSeaside({resetContextData, cards_data, section, currentlyClickedCardID}) {

    const [extended_card_toggled, SetExtended_card_toggled] = useState(true);

    // cards_data: is a whole bunch of data for all the cards. you must retrieve the one you need.
    const { 
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID  
    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
            setCardIsClicked(false);
            setCurrentlyClickedCardID(null);
            setCurrentlyVisitedSection(null);
    }

    function handle_reset_data() {
        SetExtended_card_toggled(false);
        setTimeout(()=> {
            resetContextData();
        }, 1000)
    }
    
    return (
        <div class={`ext_sea_card_container ext_sea_card_container_appears ${extended_card_toggled === false ? "ext_sea_card_container_fades" : ""}`} 
        onClick={handle_reset_data}>
            {section}  card, item: {currentlyClickedCardID}
        </div>
    )
}