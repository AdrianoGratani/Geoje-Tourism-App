import React from 'react';
import "./mmenu.css";
// usee mmmenu context to decide if this appears or not :
import { useMmenuctx } from '../../context/mmenuctx';

// compares logic is in mapsmenu.js

export default function Mmenu() {
    const {showmmenu,  setShowmmenu} = useMmenuctx();

    return (
            <div class={`mmenu ${showmmenu ? "mmenucomp" : ""}`}
                onClick={()=> setShowmmenu(false)}
            >

                mobile menu
            </div>
    )
}