import React from "react";
import {useState} from 'react';
import Map_items from "./Map_items"
import { AiOutlineDown } from "react-icons/ai";
import "./maps_menu.css";


export default function Maps_menu() {

    const [maps_triggered, setMaps_triggered] = useState(true);
    const [map_li_fades, setMap_li_fades] = useState(false);

    function wait_trigger_useState() {       // first animate li "maps" to disappear, then trigger animation for list items to appear.
        setMap_li_fades(true)
        setTimeout(() => {
            setMaps_triggered(false);
            setMap_li_fades(false);
        }, 500)
    }

    return (
        <div>
            {maps_triggered 
                ?
                    <div  className="map_menu_container">
                        <li className={` ${map_li_fades ? "maps_li_fades" : "maps_li"}`} onMouseEnter={() =>  wait_trigger_useState()}>
                        Maps 
                        </li>
                        <div className="map_li_icon">
                            <AiOutlineDown className={` ${map_li_fades ? "maps_li_fades map_li_icon_hovered" : "maps_li"}`} onMouseEnter={() =>  wait_trigger_useState()}/>
                        </div>
                    </div>
                :   <Map_items maps_triggered={maps_triggered} setMaps_triggered={setMaps_triggered}/>
            }
        </div>
    )
}