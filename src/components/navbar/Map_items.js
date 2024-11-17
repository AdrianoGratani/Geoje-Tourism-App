import React, { useState } from 'react';
import { FaMountainSun } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaPagelines } from "react-icons/fa6";
import { FaFish } from "react-icons/fa6";
import "./map_items.css";

const Map_items = ({maps_triggered, setMaps_triggered}) => {
    const [item_hides, setItem_hides] = useState(false);
    const ti = [
        <FaMountainSun className="header_icon item_hike"/>,
        <FaUmbrellaBeach className="header_icon item_sea" />,
        <FaPagelines className="header_icon item_isl"/>,
        <FaFish className="header_icon item_food"/>,
    ];

    function wait_trigger_useState() {       // first animate li "maps" to disappear, then trigger animation for list items to appear.
        setItem_hides(true)
        setTimeout(() => {
            setMaps_triggered(!maps_triggered)
            setItem_hides(false);
        }, 1000)
    }

    return (
        <div onClick={()=>wait_trigger_useState()} className={` ${item_hides ? "map_items_container_hide" : "map_items_container"}`} >
            <li className="item " >
                {ti[0]} Hiking
            </li>
            <li className="item ">
                {ti[1]} Seaside
            </li>
            <li className="item ">
                {ti[2]} Islets
            </li>
            <li className="item ">
                {ti[3]} Food
             </li>
        </div>
    )
}

export default Map_items;