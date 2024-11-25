import React from 'react'
import {useState} from 'react';
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";

export default function ExtIslets({resetContextData, cards_data}) {
    // state for toggling the card:
    const [toggle_animation, setToggle_animation] = useState(true);


    // CONTEXT:
    const { 
        card_data_for_ext_card,
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID  
    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
            setCard_data_for_ext_card(null)
            setCardIsClicked(false);
            setCurrentlyVisitedSection(null);
            setCurrentlyClickedCardID(null);
    }

    function handle_reset_data() {
        setToggle_animation(!toggle_animation);
        console.log(cards_data.id);
        setTimeout(()=> {
            resetContextData();
        }, 1000)
    }

    return (
        
        <div id="ext_islet_card_container" onClick={handle_reset_data}
        // BUG class={`ext_card_container ${toggle_animation ? "ext_card_container_appears" : "ext_card_container_fades"}`}
        class={`ext_islet_card_container ext_islet_card_container_appears
        ${toggle_animation===false ? "ext_islet_card_container_fades" : ""}`}
        >
        {/* same layout for all sections. */}

        <div class="ext_card_text_container">

            <div class="ext_card_title_container">
                <h1>{card_data_for_ext_card.name}</h1>
            </div>
        </div>



        </div>
    )
}