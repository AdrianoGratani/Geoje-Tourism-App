import React from 'react';
import {ReactComponent as Geoje_islets} from "../../../img/geoje_islets.svg";

import "./section_map_islets.css";


export default function Section_map_islets() {

    return (

        <div class="single_map_section_container islet_map">
            <Geoje_islets class="geoje_islets_svg"/>
        </div>
    )
}