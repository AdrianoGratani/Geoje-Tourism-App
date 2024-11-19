import React from 'react';
import { GiIsland } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa6";
import { FaBridgeWater } from "react-icons/fa6";

export default function Card_islet({card_data, id_index}) {

    let c = card_data;

    let islets_card_data_keys = {
        // short card data
        n : c.name,
        c : c.car,
        b : c.bridge,
        // expanded card data.
        s : c.sand,
        e : c.eat,
    };

    return (
        <div className="card_islets_container">
            <h1 className="card_name_islets">
                <div className="icon_container_islets">
                    <GiIsland />
                </div>
                <div className="islets_text">
                    {islets_card_data_keys.n}
                </div>
            </h1>
            <h4 className="card_name_bycar">
                <div className="icon_container_islets">
                    <FaCarSide />
                </div>
                <div className="islets_text">
                    {islets_card_data_keys.c}
                </div>
            </h4>
            <h4 className="card_name_bridge">
                <div className="icon_container_islets">
                    <FaBridgeWater />
                </div>
                <div className="islets_text">
                    {islets_card_data_keys.b}
                </div>
            </h4>
          
        </div>
    )
}