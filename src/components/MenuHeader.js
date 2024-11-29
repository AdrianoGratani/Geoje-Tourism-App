import React from 'react';
import "../pages/menu_page/menu_page.css";
import MapsMenu from './navbar/MapsMenu';


export default function MenuHeader() {

    return (
        <div className="menu_page_header">
            <nav className="menu_page_nav">
                    <ul className="menu_page_ul">
                    <li className="menu_about_me">About</li>
                    <MapsMenu />
                </ul>
            </nav>
        </div>
    )
}