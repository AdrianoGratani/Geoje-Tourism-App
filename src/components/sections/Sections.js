import React from 'react';
import {useState} from 'react';
import Section_map_land from './section_map_land/Section_map_land';
import Section_map_sea from './section_map_sea/Section_map_sea';
import Section_map_islets from './section_map_islets/Section_map_islets';
import Sections_text from './Sections_text';
import sections_text from '../../text/sections_text';
import "./sections.css";

export default function Sections() {
    const m = sections_text.section_mainland;
    const s = sections_text.section_seaside;
    const i = sections_text.section_islets;

    // this useState goes to both map and text components. text component sends it to Card component.
    const [hoveredTrailCard, setHoveredTrailCard] = useState("no_trail_card_currently_hovered");
    const [hoveredBeachCard, setHoveredBeachCard] = useState("no_beach_card_currently_hovered");
    const [hoveredIsletCard, setHoveredIsletCard] = useState("no_islet_card_currently_hovered");


    const handle_trail_card_hovered = (trail_card_hovered_location) => {       // trail_card_hovered_location is a string with the name of the location
        setHoveredTrailCard(trail_card_hovered_location);
    }
    const handle_beach_card_hovered = (beach_card_hovered_location) => {       // beach_card_hovered_location is a string with the name of the location
        setHoveredBeachCard(beach_card_hovered_location);
    }
    const handle_islet_card_hovered = (islet_card_hovered_location) => {       // islet_card_hovered_location is a string with the name of the location
        setHoveredIsletCard(islet_card_hovered_location);
    }

    // nb: Sections_text stores BOTH text and and the cards components;
    return (
        <div class="map_sections_container">
            <div id="land" className=" single_section_container s_land">
                <Section_map_land />                                            
                {/* 2. it takes the State. SVG <path> of the hovered location (on Card) changes its color */}


                <Sections_text text_data={m}/>                                  
                {/* 1. it takes the SetState. it sends this setState to Card. when Card is hovered, it sends a setState back to Section.  */}
            </div>
            <div id="sea" className="single_section_container s_sea">
                <Section_map_sea/>
                <Sections_text text_data={s}/>
            </div>
            <div id="islets" className="single_section_container s_islets">
                <Section_map_islets/>
                <Sections_text text_data={i}/>
            </div>

        </div>
    )
}

// `id` is needed to apply react scrollIntoView.