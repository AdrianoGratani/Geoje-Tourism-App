import React from 'react';
// map svg component:
import Section_map_land from './section_map_land/Section_map_land';
import Section_map_sea from './section_map_sea/Section_map_sea';
import Section_map_islets from './section_map_islets/Section_map_islets';
// text data:
import Sections_text from './Sections_text';
import sections_text from '../../text/sections_text';
// cards data:
import locations_data from "../../../src/locations_data/locations_data";

import "./sections.css";

export default function Sections() {
    // text data:
    const m = sections_text.section_mainland;
    const s = sections_text.section_seaside;
    const i = sections_text.section_islets;

    // cards data:
    const la = locations_data.mainland;
    const be = locations_data.seaside;
    const is = locations_data.islets;

    // nb: Sections_text stores BOTH text and and the cards components;
    return (
        <div class="map_sections_container">
            <div id="land" className=" single_section_container s_land">
                {/* 2. it takes the State. SVG <path> of the hovered location (on Card) changes its color */}
                <Section_map_land />                                            
                {/* 1. it takes the SetState. it sends this setState to Card. when Card is hovered, it sends a setState back to Section.  */}
                <Sections_text text_data={m} cards_data={la} section={"mainland"}/>                                  
            </div>
            <div id="sea" className="single_section_container s_sea">
                <Section_map_sea/>
                <Sections_text text_data={s} cards_data={be} section={"seaside"}/>
            </div>
            <div id="islets" className="single_section_container s_islets">
                <Section_map_islets/>
                <Sections_text text_data={i} cards_data={is} section={"islets"}/>
            </div>
            
        </div>
    )
}

// `id` is needed to apply react scrollIntoView.