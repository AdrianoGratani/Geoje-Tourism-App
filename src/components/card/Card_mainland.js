import React from 'react';
import "./card_style.css";
export default function Card_mainland({card_data, id_index}) {

    let c = card_data;
    let mainland_card_data_keys = {
        n : c.name,
        h : c.height,
        d : c.difficulty,
        l : c.length,
        s : c.steepness,
        du: c.duration,
        p : c.picture,
    };

    return (
        <div className="card_mainland_container">

            mainland card {id_index+1}
        </div>
    )
}