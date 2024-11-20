import React from 'react';
import "./sections_text.css";
import Card_section_location from '../card/Card_section_location';

export default function Sections_text({text_data, cards_data}) {

    return (   // text description on top, cards about each location on the bottom.
        <div class="text_and_cards_container">
            {/* title and a brief description of each section. */}
            <div className="text_container">
                <h2 className="text_title">{text_data.title}</h2>
                <h3 className="text_subtitle">{text_data.subtitle}</h3>
                <p className="text_text">{text_data.text_1}</p>
                <p className="text_text">{text_data.text_2}</p>
            </div>  

            {/* cards for each interesting point. useContext is used for making the map responsive with user interactions. */}
            {/* .map() of locations.js is used for dynamic rendering of Card.js component. 
                VERY IMPORTANT: .map() callback scope must be indented within round brackets, NOT curly brackets*/}
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
                {
                    cards_data.map((c, i)=> (
                      <Card_section_location card_data={c} id_index={i}/>
                    ))
                }
            </div>        
        </div>
    )
}