import React from 'react';
import "./footer.css"
import i from "../img/cloud_footer.png"

import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const footer_navigate = useNavigate();
    function handleRoutingAboutMe() {
        // add this string to the url => move to this page.
        footer_navigate('/about_me_page')
    }

    return(
        <footer class="footer">
            <div onClick={handleRoutingAboutMe}
            class="footer_component" id="footer_component">
                <img src={i} class="img" id=""></img>
                <p class="footer_component_element" id="footer_component_element">
                    About Me and <br/> This Project
                </p>
                <p class="footer_component_element" id="footer_component_element">
                    
                </p>
            </div>
        </footer>
    );
}