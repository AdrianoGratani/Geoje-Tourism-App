import React from 'react';
import { FaHouseTsunami } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaGlassWaterDroplet } from "react-icons/fa6";


export default function Card_seaside({card_data, id_index}) {

    let c = card_data;

    let seaside_card_data_keys = {
        n : c.name,
        s : c.sand,
        p : c.parking,
        c : c.cafes,
    };

    return (
        <div className="card_seaside_container">

            <h1 className="card_name_seaside">
                <div className="icon_container_seaside">
                    <FaHouseTsunami class="icon_sea"/>
                </div>
                <div className="seaside_text">
                    {seaside_card_data_keys.n}
                </div>
            </h1>

            <h4 className="card_sand">
                <div className="icon_container_seaside">
                    <FaUmbrellaBeach class="icon_sea"/>     
                </div>
                <div className="seaside_text">
                    {seaside_card_data_keys.s}
                </div>
            </h4>

            <h4 className="card_name_parking">
                <div className="icon_container_seaside">
                    <FaCaravan class="icon_sea"/>
                </div>
                <div className="seaside_text">
                    {seaside_card_data_keys.p}
                </div>
            </h4>
            
            <h4 className="card_name_cafes">
                <div className="icon_container_seaside">
                    <FaGlassWaterDroplet class="icon_sea"/>
                </div>
                <div className="seaside_text">
                    {seaside_card_data_keys.c}
                </div>
            </h4>
            
        </div>
    )
}