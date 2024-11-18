import React from 'react';
import {useState, useEffect} from 'react';

import Hero_map_animated from "../../components/animated/hero_maps/Hero_map_animated";
import Maps_menu from "../../components/navbar/Maps_menu";

import Sections from '../../components/sections/Sections';

import "./menu_page.css";
import "./svg.css";

export default function Menu_page() {
    
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
        <body class="body">
            <header class="menu_page_header">
                <nav class="menu_page_nav">
                    <ul class="menu_page_ul">
                        <li className="menu_about_me">AboutMe</li>
                        <Maps_menu />
                    </ul>
                </nav>
            </header>


{/* hero text - hero maps   //  maps */}
            <main class="main">

                {/* hero */}
                <div class="hero_container">
                {/* hero text */}
                    <div class="hero_text_container">
                        <h1><span class={`hero_geoje ${hero_geoje_current_color} `}>Everything</span> <br/>
                        about  <span class={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. <br/> 
                            In one Place. <br />
                        </h1>
                    </div>
                {/* hero maps */}
                    <div class="hero_maps_and_description_container">
                        <div class="hero_maps_container">
                            <Hero_map_animated index={hero_geoje_current_color}/>
                        </div>
                       
                    </div>
                </div>

{/* text goes to the RIGHT of the map */}
                   <Sections />

            </main>

        </body>
    )
}
