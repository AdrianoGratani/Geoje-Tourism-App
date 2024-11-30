import {React, useState, useEffect} from 'react';
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
    const [n, setN] = useState(0);
    const [lim, setLim] = useState(false);
    const [x, setX]= useState(false); // if true: icons start appearing;

    const ic = [
        <FaMountainSun className="mmii" />,
        <FaUmbrellaBeach className="mmii" />,
        <FaPagelines className="mmii" />,
        // <FaFish className="header_icon item_food"/>,
        // <FaLandmarkDome className="header_icon item_infos"/>,
        // <FaCity className="header_icon item_cities"/>,
    ];

    function r(t) {       //reset icon data
        setTimeout(()=> {
            setShowmmenu(false);
            setN(0);
            setX(false);
        }, t)
    }

    const s =(ss) => {    // scroll after clicking the button;
        const x = document.getElementById(ss);
        x.scrollIntoView({behavior: "smooth"});
        r(300);
    }

    useEffect(()=> {
        if( showmmenu && n!=ic.length-1) {
            const t = setInterval(()=> setN((prev)=> prev+1), 300);
            return ()=> clearInterval(t);
        }
        else if( showmmenu && n===ic.length-1) { 
            setTimeout(()=> {
                setX(true); // icons appear;
            },300)
        }
        else return; 
    });



    return (
            <div class={` mmenu ${showmmenu ? "mmenucomp" : ""}`}
                onClick={()=> r(700)}
            >
                {/* {n}"  " {x ? "true":"false"} */}
                    <div className='mmic'>

                        <h1 className={`${x ? "mmtcm" : "mmto"}`}>
                            "Where do you want to go?"
                        </h1>

                        <div onClick={()=> s("land")} className={`${x ? "mmi mmenucm" : "mmo"}`}>
                                {ic[0]}
                        </div>
                        <div onClick={()=> s("sea")} className={`${x ? "mmi mmenucs" : "mmo"}`}>
                                {ic[1]}
                        </div>
                        <div onClick={()=> s("islets")} className={`${x ? "mmi mmenuci" : "mmo"}`}>
                                {ic[2]}
                        </div>
                    </div>


                <div className='ocean'>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>
    )
}