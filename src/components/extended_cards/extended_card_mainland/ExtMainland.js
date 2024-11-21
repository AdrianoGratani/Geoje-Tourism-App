import React from 'react'
import { useCardContext } from '../../../context/CardContext';

export default function ExtMainland({ cards_data, section, currentlyClickedCardID}) {

    // CONTEXT:
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