import React from 'react';

import Night from "../components/animated/night/Night";
import Sun from "../components/animated/sun/Sun";
import Moon from "../components/animated/moon/Moon";
import Cloud_one from './animated/clouds/Cloud_one';
import Cloud_menu from './animated/clouds/Cloud_menu';

export default function Main() {

    return (
        <main>
            <div class="main_container" id="main_container">
                 {/* animated elements: __absolutely-positioned__ */}
                 <Sun />
                <Moon />
                <Night />
                <Cloud_one />
                <Cloud_menu/>
            </div>
        </main>
    );
}