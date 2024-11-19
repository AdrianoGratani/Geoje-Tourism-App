import React from 'react';



export default function Card_seaside({card_data, id_index}) {

    let c = card_data;

    let seaside_card_data_keys = {
        n : c.name,
        s : c.sand,
        p : c.parking,
        c : c.cafes,
    };

    return (
        <div>
            seaside card
        </div>
    )
}