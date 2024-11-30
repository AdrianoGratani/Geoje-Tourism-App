import React from 'react';
import "../pages/menu_page/menu_page.css";
import MapsMenu from './navbar/MapsMenu';
import { useScreenContext } from '../context/ScreenSizeContext';

export default function MenuHeader() {
    const {currentScreenWidthContext, screenMode} = useScreenContext();

    return (
        <div className="menu_page_header">
            <nav className="menu_page_nav">
                    <ul className="menu_page_ul ">
                        <li className="menu_about_me">About</li>
                        {
                            // not on mobile version:
                            currentScreenWidthContext > 600 && screenMode !== 'mobile'
                                ?
                                <li className="">
                                    <MapsMenu />
                                </li>
                            : null
                        }
                </ul>
            </nav>
        </div>
    )
}