import React, { useEffect, useState } from 'react'
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";

export default function ExtMainland({ cards_data, section, currentlyClickedCardID}) {
    let card_data_extracted = cards_data[currentlyClickedCardID];
    const [toggle_animation, setToggle_animation] = useState(true);
    // CONTEXT:
    const { 
        cardIsClicked, 
        setCardIsClicked,
        currentlyVisitedSection,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID  
    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
            setCardIsClicked(false);
            setCurrentlyClickedCardID(null);
            setCurrentlyVisitedSection(null);
    }
    
   
    function handle_reset_data() {
        setToggle_animation(false)
        setTimeout(()=> {
            resetContextData();
            // add the removed class here,
        }, 1000)
    }



    return (
        <div id="ext_card_container" onClick={handle_reset_data}
            // class={`ext_card_container ${toggle_animation ? "ext_card_container_appears" : "ext_card_container_fades"}`}
            class={`ext_card_container ext_card_container_appears ${toggle_animation===false ? "ext_card_container_fades" : ""}`}
        >
           {currentlyClickedCardID}
        </div>
    )
}