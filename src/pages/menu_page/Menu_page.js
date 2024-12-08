import React from 'react';
import {useState, useEffect} from 'react';
import MenuHeader from '../../components/MenuHeader';
import Hero from '../../components/Hero';
import ApiWeather from '../../components/apiWeather/ApiWeather';
import Sections from '../../components/sections/Sections';
import FooterMain from "../../components/FooterMain";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import "./menu_page.css";
import "./svg.css";

// context data: click on a mobile button -> a menu compares:
import { MmenuctxProvider } from '../../context/mmenuctx';

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
        <body className="body">

            <ScrollTopBtn />
            <MmenuctxProvider>
                <header>
                        <MenuHeader/>
                </header>


                <main className="main">
                    <Hero hero_geoje_current_color={hero_geoje_current_color} />
                    <Sections />
                    <ApiWeather /> 
                </main>
            </MmenuctxProvider>

            <footer>
                <FooterMain/>
            </footer>
        </body>
    )
}
