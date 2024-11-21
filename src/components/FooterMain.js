import React from 'react';
import "./footer_main.css";

export default function FooterMain() {

    return (
        <div className="footer_container">

{/*  A PICTURE OF YOU? MAYBE? SOMEWHERE? */}
{/* https://ifonts.xyz/almarena-neue-font-family.html    for the animation */}
{/* https://fonnts.com/cotoris/   for the form description text  */}
{/* https://www.1001freefonts.com/bodoni.font   elegant. */}
            {/* the header */}
            <div className="footer_header_container">
                <div className="footer_header_left">
                    <div className="footer_header_logo_container">
                        {/* logo goes here */}
                    </div>
                    <div className="footer_header_job_container">
                        {/* your job, in few words, of just a cool phrases "Adriano solves Problems." 
                        use two <p>, one up one down*/}
                    </div>
                    <div className="footer_header_address_container">
                        {/* your address here 
                        use two <p>, one up one down*/}
                    </div>
                </div>

                <div className="footer_header_right">
                    <div className="footer_header_aboutme">
                        {/* describe your life, max 400 chars. comes as animation like night.js, 200 characters max.*/}
                    </div>
                    <div className="footer_header_method">
                        {/* my ethics of works. comes as animation like night.js, 200 characters max. */}
                    </div>
                    <div className="footer_header_code">
                        {/* write something like: "check the code". is a link to github repo for this project. */}
                    </div>
                </div>
            </div>

            {/* the animation  */}
            <div class="footer_animation_container">
                {/* automatic writing of phrase like "Write me! [< cancel this] Read the about me! [< cancel this]" infinite loop*/}
                
            </div>
            
            {/* form(left) and links(right) */}
            <div className="footer_form_links_container">
                
                {/* form */}
                <div className="footer_form_container">
                    <div className="footer_form_description_container">
                        {/* "contact me for more informations or to share insights with me." */}
                    </div>
                    <div className="footer_form">
                        {/* form goes here, name and email */}
                        {/* button to send, down */}
                    </div>
                </div>

                {/* links: social(left) and addresses(right) */}
                <div className="footer_links_container">
                    {/* social */}
                    <div className="footer_links_social_container">
                        {/* a title phrase: "Socializer" */}
                        {/* stacked on top of each other: portfolio website, linkedIn, GitHub*/}
                    </div>
                    {/* addresses */}
                    <div className="footer_links_addresses_container">
                        {/* a title phrase: "say hello!" */}
                        {/* stacked on top of each other: email telephone number address */}
                    </div>
                </div>
            </div>

            {/* signature: just your name in a fancy font it goes UNDER the social*/}
            <div className="footer_signature_container">

            </div>

            {/* footer of the footer: copyright and year */}
            <div className="footer_footer_container">

            </div>

        </div>
    )
}