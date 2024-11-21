import React from 'react';    // CONTEXT:

import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";

export default function ExtSeaside({resetContextData, cards_data, section, currentlyClickedCardID}) {

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
        setTimeout(()=> {
            resetContextData();
        }, 1000)
    }
    
    return (
        <div onClick={handle_reset_data}>
            card {section} item {currentlyClickedCardID}
        </div>
    )
}