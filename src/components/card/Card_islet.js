import React from 'react';

export default function Card_islet({card_data, id_index}) {

    let c = card_data;

    let islets_card_data_keys = {
        n : c.name,
        s : c.sand,
        c : c.car,
        e : c.eat,
        b : c.bridge,
    };

    return (
        <div>
            islet card
        </div>
    )
}