import React from 'react';
import "./card_style.css";
import { FaMountain } from "react-icons/fa6";
import { FaPersonHiking } from "react-icons/fa6";
import { FaRightLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { useState } from 'react';

import "./ext_card_mainland.css";

export default function Card_mainland({card_data, id_index}) {

    // this component dynamically renders Card_small or Card_Ext, based on the value stored in `user_clicked_to_enlarge`;
    // by default, the value is set to `fales`, so the small card is rendered.
    // Card_Ext is absolutely positioned and compares with an animation, which is quite similar to the moonLight sky in AboutMe page.

    const [user_clicked_to_enlarge, setUser_clicked_to_enlarge] = useState(false);   // when `false`, card is shown; when `true` an animation of the extended card appears from the top left corner of Section.

    function handleClickCardVersion() { 
        setUser_clicked_to_enlarge(!user_clicked_to_enlarge);
    }


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
        
        // upper line: name;  lower line: infos.   >>> EVENT LISTENER GOES HERE TO THE CONTAINER.
                    <div className="card_mainland_container" onClick={handleClickCardVersion}> 
                        {
                            user_clicked_to_enlarge ? <ExtCardMainland/> : null
                        }
                        
                        {/* SMALL CARD COMPONENT. */}
                        {/* name takes a full line. */}
                        <h1 className="card_name_mainland">
                            <div className="icon_container">
                                <FaMountain className="icon" />
                            </div>
                            <div className="mainland_text">
                                {mainland_card_data_keys.n}
                            </div>
                        </h1>
        
                        {/* additional card infos take one line altogether. */}
                        <div className="card_additional_infos">
                            <h4 className="card_difficulty">
                                <div className="icon_container">
                                    <FaPersonHiking className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.d}
                                </div>
                            </h4>
                            <h4 className="card_length">
                                <div className="icon_container">
                                    <FaRightLeft className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.l}
                                </div>
                            </h4>
                            <h4 className="card_duration">
                                <div className="icon_container">
                                    <FaClock className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.du}
                                </div>
                            </h4>
                        </div>
                    </div>
    )
}


// EXTENDEND CARD:

function ExtCardMainland() {

    return (
        <div class="ext_card_container" id="ext_card_container">
            <h1>
                Extended card
            </h1>
        </div>
        )
}