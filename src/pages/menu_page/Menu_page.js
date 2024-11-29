import React from 'react';
import {useState, useEffect} from 'react';

import HeroMapAnimated from "../../components/animated/hero_maps/HeroMapAnimated";
import MapsMenu from "../../components/navbar/MapsMenu";
import Sections from '../../components/sections/Sections';
import FooterMain from "../../components/FooterMain";

import "./menu_page.css";
import "./svg.css";

import { useScreenContext } from '../../context/ScreenSizeContext';

export default function Menu_page() {

    const {currentScreenWidthContext,
            screenMode
         }= useScreenContext();
    
    
    const hero_geoje_colors = ["land", "beach", "islets"];
    const [hero_geoje_current_color, setHero_geoje_current_color] = useState(hero_geoje_colors[0]);
    
    let i = hero_geoje_colors.indexOf(hero_geoje_current_color);
    
    function switch_hero_geoje_color() {
        if(i === hero_geoje_colors.length-1) {
            setHero_geoje_current_color(hero_geoje_colors[i-i]);
        }
        else {
            i++;
            setHero_geoje_current_color(hero_geoje_colors[i])
        }
    }

    useEffect(()=> {
        const timer_call = setInterval(()=> switch_hero_geoje_color(), 3500);
        return () => clearInterval(timer_call);
    })

    return (
        <body className="body">

            {/* main page header  */}
            <header className="menu_page_header">
                <nav className="menu_page_nav">
                    <ul className="menu_page_ul">
                        <li className="menu_about_me">{screenMode}</li>
                        <MapsMenu />
                    </ul>
                </nav>
            </header>

            {/* main page hero text - hero maps   //  maps */}
            <main className="main">

                {/* hero */}
                <div className="hero_container">
                {/* hero text */}
                    <div className="hero_text_container">
                        <h1><span className={`hero_geoje ${hero_geoje_current_color} `}>Everything</span> <br/>
                        about  <span className={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. <br/> 
                            In one Place. <br />
                        </h1>
                    </div>
                {/* hero maps */}
                    <div className="hero_maps_and_description_container">
                        <div className="hero_maps_container">
                            <HeroMapAnimated index={hero_geoje_current_color}/>
                        </div>
                       
                    </div>
                </div>

                {/* text goes to the RIGHT of the map */}
                <Sections />
                <FooterMain/>
                
            </main>
        </body>
    )
}
