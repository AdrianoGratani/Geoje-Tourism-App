import React from 'react';
import { useEffect } from 'react';
import { useCardContext } from '../../context/CardContext';
import Card_section_location from '../card/Card_section_location';
// extended cards:
// import {ExtMainland} from "../extended_cards/extended_card_mainland/ExtMainland";     {} WHEN IMPORTING  export default components, is wrong.
import ExtMainland from "../extended_cards/extended_card_mainland/ExtMainland";
import ExtSeaside from "../extended_cards/extended_card_seaside/ExtSeaside";
import ExtIslets from "../extended_cards/extended_card_islets/ExtIslets";

import "./sections_text.css";

export default function Sections_text({text_data, cards_data, section}) {

    // CONTEXT:
    const { 
        cardIsClicked, setCardIsClicked,
        currentlyVisitedSection, setCurrentlyVisitedSection,
        currentlyClickedCardID, setCurrentlyClickedCardID  
    } = useCardContext();

    let display_extended_card = currentlyVisitedSection === section 
                                && cardIsClicked 
                                && currentlyClickedCardID !== null;



    function ExtCardSectionEvaluator() {                                // for each section the extended card has different style and animation.
        if(section === "mainland") {
            return <ExtMainland cards_data={cards_data} section={section} currentlyClickedCardID={currentlyClickedCardID}/>;
        }
        else if(section === "seaside") {
            return <ExtSeaside cards_data={cards_data} section={section} currentlyClickedCardID={currentlyClickedCardID}/>
        }
        else if(section === "islets") {
            return   <ExtIslets cards_data={cards_data} section={section} currentlyClickedCardID={currentlyClickedCardID}/>
        }
    }

    // debug:
    useEffect(() => {
        if(display_extended_card){
            console.log("Section_text.js; This is happening in: " + currentlyVisitedSection + " and current ID is:" + currentlyClickedCardID);
        }
    }, [currentlyClickedCardID]);

    return (   // text description on top, cards about each location on the bottom.
        <div class="text_and_cards_container">
            {
                display_extended_card 
                ? ExtCardSectionEvaluator()
                : null
            }

            {/* title and a brief description of each section. */}
            <div className="text_container">
                <h2 className="text_title">{text_data.title}</h2>
                <h3 className="text_subtitle">{text_data.subtitle}</h3>
                <p className="text_text">{text_data.text_1}</p>
                <p className="text_text">{text_data.text_2}</p>
            </div>  

            
            {/* 
                - this componentSections_text has a useState inherited from Sections,
                which is sent to each Card children. 
                - this usestate stores an ID of a Card component.  by DEFAULT is "none";
                when a specific card is HOVERED, useState of the parent is updated with that specific ID.
                IF NO card is HOVERED useState has to be reset to "none";

                now: the useState has the 'id' of the hovered card.
                     each section map SVG has many <path>, one for each location, they are black round points by default
                     use the id stored in useState to set the color of the <path> of the city.
                     the specific <path> changes style, now is a orange-brown for Mailand, orange-red in Seaside, yellow in Islets
            */}

            <div className="cards_area_container">
                {/* cards for each interesting point. useContext is used for making the map responsive with user interactions. */}
                {
                    cards_data.map((c, i)=> (
                        //  .map() of locations.js is used for dynamic rendering of Card.js component. 
                        // VERY IMPORTANT: .map() callback scope must be indented within round brackets, NOT curly brackets
                      <Card_section_location card_data={c} id_index={i}/>
                    ))
                }
            </div>        
        </div>
    )
}