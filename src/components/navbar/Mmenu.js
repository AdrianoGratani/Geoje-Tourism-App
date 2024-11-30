import React from 'react';
import "./mmenu.css";
// usee mmmenu context to decide if this appears or not :
import { useMmenuctx } from '../../context/mmenuctx';
import { FaMountainSun } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaPagelines } from "react-icons/fa6";
import { FaFish } from "react-icons/fa6";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";

// compares logic is in mapsmenu.js

export default function Mmenu() {
    const {showmmenu,  setShowmmenu} = useMmenuctx();

    const ic = [
        <FaMountainSun className="header_icon item_hike"/>,
        <FaUmbrellaBeach className="header_icon item_sea" />,
        <FaPagelines className="header_icon item_isl"/>,
        <FaFish className="header_icon item_food"/>,
        <FaLandmarkDome className="header_icon item_infos"/>,
        <FaCity className="header_icon item_cities"/>,
    ];
    return (
            <div class={`mmenu ${showmmenu ? "mmenucomp" : ""}`}
                onClick={()=> setShowmmenu(false)}
            >
                <div className='ocean'>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>
    )
}