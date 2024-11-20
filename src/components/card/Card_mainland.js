import React from 'react';
import "./card_style.css";
import { FaMountain } from "react-icons/fa6";
import { FaPersonHiking } from "react-icons/fa6";
import { FaRightLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function Card_mainland({card_data, id_index}) {

    let c = card_data;
    let mainland_card_data_keys = {
        // limited size card data:
        n : c.name,
        d : c.difficulty,
        l : c.length,
        du: c.duration,
        // full card data:
        h : c.height,
        s : c.steepness,
        p : c.picture,
    };

    return (
        // upper line: name;  lower line: infos.
        <div className="card_mainland_container">
            {/* name takes a full line. */}
            <h1 className="card_name_mainland">
                <div className="icon_container">
                    <FaMountain class="icon" />
                </div>
                <div className="mainland_text">
                    {mainland_card_data_keys.n}
                </div>
            </h1>

            {/* additional card infos take one line altogether. */}
            <div class="card_additional_infos">
                <h4 className="card_difficulty">
                    <div className="icon_container">
                        <FaPersonHiking class="icon"/>
                    </div>
                    <div className="mainland_text">
                        {mainland_card_data_keys.d}
                    </div>
                </h4>
                <h4 className="card_length">
                    <div className="icon_container">
                        <FaRightLeft class="icon"/>
                    </div>
                    <div className="mainland_text">
                        {mainland_card_data_keys.l}
                    </div>
                </h4>
                <h4 className="card_duration">
                    <div className="icon_container">
                        <FaClock class="icon"/>
                    </div>
                    <div className="mainland_text">
                        {mainland_card_data_keys.du}
                    </div>
                </h4>
            </div>
        </div>
    )
}