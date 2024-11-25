import React from 'react';    // CONTEXT:
import { useState } from 'react';
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";
import Carousel from '../extended_card_carousel/Carousel';

export default function ExtSeaside({resetContextData, cards_data}) {

    const [extended_card_toggled, SetExtended_card_toggled] = useState(true);

    const c = cards_data;

    // cards_data: is a whole bunch of data for all the cards. you must retrieve the one you need.
    const { 
        card_data_for_ext_card,
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID  
    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
        setCard_data_for_ext_card(null);    
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
        {/* same layout for all sections. */}

        <div class="ext_card_text_container">

            <div class="ext_card_title_container">
                <h1 class="ext_card_title">{card_data_for_ext_card.name}</h1>
            </div>

            <div class="ext_card_text_container">
                    <Carousel />
            </div>

            <div class="ext_card_infos_container">
                <div class="ext_card_infos_subtitle_container">
                    <h2 class="ext_card_infos_subtitle">
                        {card_data_for_ext_card.subtitle}
                    </h2>
                </div>

                {/* picture_folder: "" */}
                <div class="ext_card_infos_sand_container">
                    <p class="ext_card_infos_sand">
                    {card_data_for_ext_card.sand}
                    </p>
                </div>
                <div class="ext_card_infos_car_container">
                    <p class="ext_card_infos_car">
                    {card_data_for_ext_card.car}
                    </p>
                </div>
                <div class="ext_card_infos_eat_container">
                    <p class="ext_card_infos_eat">
                    {card_data_for_ext_card.eat}
                    </p>
                </div>
                <div class="ext_card_infos_bridge_container">
                    <p class="ext_card_infos_bridge">
                        {card_data_for_ext_card.bridge}
                    </p>
                </div>
            </div>
        </div>



        </div>
    )
}