import React from 'react';
import Section_map_land from './section_map_land/Section_map_land';
import Section_map_sea from './section_map_sea/Section_map_sea';
import Section_map_islets from './section_map_islets/Section_map_islets';

import "./sections.css";

export default function Sections() {

    return (
        <div class="map_sections_container">
            <Section_map_land /> 
            <Section_map_sea/>
            <Section_map_islets/>
        </div>
    )
}