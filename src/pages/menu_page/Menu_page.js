import React from 'react';
import {useState, useEffect} from 'react';
import text_data from "./text_data";

import Hero_map_animated from "../../components/animated/hero_maps/Hero_map_animated";

import {ReactComponent as Geoje_land} from "./geoje_land.svg";
import {ReactComponent as Geoje_beach} from "./geoje_beach.svg";
import {ReactComponent as Geoje_islets} from "./geoje_islets.svg";

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
                        <li>Mainland</li>
                        <li>Seaside</li>
                        <li>Islets</li>
                        <li>Food</li>
                        <li>Hiking</li>
                        <li>Infos</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>


{/* hero text - hero maps   //  maps */}
            <main class="main">

                {/* hero */}
                <div class="hero_container">
                {/* hero text */}
                    <div class="hero_text_container">
                        <h1><span class={`hero_geoje ${hero_geoje_current_color}`}>Everything</span> <br/>
                        about  <span class={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. <br/> 
                            In one Place.
                        </h1>
                    </div>
                {/* hero maps */}
                    <div class="hero_maps_and_description_container">
                        <div class="hero_maps_container">
                            <Hero_map_animated index={hero_geoje_current_color}/>
                        </div>
                        <div class="hero_text_description_container">
                            {text_data.hero_description.beach}
                        </div>
                    </div>
                </div>


{/* text goes to the RIGHT of the map */}
                <div class="map_sections_container">
                    <div class="single_map_section_container">
                        <Geoje_land class="geoje_land_svg"/>
                    </div>
                    <div class="single_map_section_container">
                        <Geoje_beach class="geoje_land_svg"/>
                    </div>
                    <div class="single_map_section_container islet_map">
                        <Geoje_islets class="geoje_land_svg"/>
                    </div>
                </div>

            </main>

        </body>
    )
}

/*
create a map illustration of geoje:
https://dribbble.com/stories/2019/03/27/how-to-create-an-illustrated-map-in-8-simple-steps

CITIES
jangseungpo
gujora
okpo           Okpo waterside park
jisaepo         sonocalm

BEAUTY
Daegeumsan   view
mundong waterfall
naedo island
oedo island, botania
Geoje Botanical Garden Jungle Dome
Gyeryong-san


*/