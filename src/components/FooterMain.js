import React from 'react';
import "./footer_main.css";

export default function FooterMain() {

    return (
        <div className="footer_container playfair-display_it_light">

{/*  A PICTURE MAYBE?  */}
{/* https://ifonts.xyz/almarena-neue-font-family.html    for the animation */}
{/* https://fonnts.com/cotoris/   for the form description text  */}
{/* https://www.1001freefonts.com/bodoni.font   elegant. */}


            {/* the header */}
            <div className="footer_header_container ">
                {/* LEFT */}
                <div className="footer_header_left">
                    <div className="footer_header_logo_container">
                        {/* logo goes here */} here is the logo
                    </div>
                    <div className="footer_header_job_container">
                        {/* your job, in few words, of just a cool phrases "Adriano solves Problems." 
                        use two <p>, one up one down*/}Adriano, <br/> Frontend Dev.
                    </div>
                    <div className="footer_header_address_container">
                        {/* your address here 
                        use two <p>, one up one down*/}
                        Geoje, <br /> South Korea.
                    </div>
                </div>

                {/* RIGHT */}
                <div className="footer_header_right">
                    <div className="footer_header_aboutme">
                        {/* LINK ON CLICK: describe your life, max 400 chars. comes as animation like night.js, 200 characters max.*/}
                        My Journey
                    </div>
                    <div className="footer_header_method">
                        {/* my ethics of works. comes as animation like night.js, 200 characters max. */}
                        Work Ethic
                    </div>
                    <div className="footer_header_code">
                        {/* write something like: "check the code". is a link to github repo for this project. */}
                        My Code
                    </div>
                </div>
            </div>

            {/* the animation  */}
            <div class="footer_animation_container playfair-display_light">
                {/* automatic writing of phrase like "Write me! [< cancel this] Read the about me! [< cancel this]" infinite loop*/}
                big animation for text in the middle
            </div>
            
            {/* form(left) and links(right) */}
            <div className="footer_form_links_container">
                
                {/* form */}
                <div className="footer_form_container">
                    <div className="footer_form_description_container playfair-display_light">
                        {/* "contact me for more informations or to share insights with me." */}
                        Contact me for further discussion about Frontend development
                    </div>
                    <div className="footer_form_container">
                        {/* form goes here, name and email */}
                        {/* button to send, down */}

                        <form class="footer_form">
                            <placeholder class="placeholder_name" id="name"></placeholder>
                            <input  type="text" id="name" class="input_name" />
                            <placeholder class="placeholder_mail" id="email"></placeholder>
                            <input input="email" id="email" class="input_name"/>
                        </form>
                        <button class="footer_button">Send</button>
                    </div>
                </div>

                {/* links: social(left) and addresses(right) */}
                <div className="footer_links_container">
                    {/* social */}
                    <div className="footer_links_social_container">
                        {/* a title phrase: "Socializer" */}
                        {/* stacked on top of each other: portfolio website, linkedIn, GitHub*/}
                        <h1 class="links_title">My Links</h1>
                        <a href="#" class="link playfair-display_light">GitHub</a>
                        <a href="#" class="link playfair-display_light">LinkedIn</a>
                        <a href="#" class="link playfair-display_light">Youtube</a>
                        <a href="#" class="link playfair-display_light">CV</a>
                        
                        {/* signature: just your name in a fancy font it goes UNDER the social*/}
                        <div className="footer_signature_container">
                            <div className="footer_signature">
                                Adriano Gratani
                            </div>
                        </div>
                    </div>
                    {/* addresses */}
                    <div className="footer_links_addresses_container">
                        {/* a title phrase: "say hello!" */}
                        {/* stacked on top of each other: email telephone number address */}
                        <h1 class="hello_title">say 'hello!'</h1>
                        <a href="#" class="link playfair-display_light">mail</a>
                        <a href="#" class="link playfair-display_light">telephone</a>
                        <a href="#" class="link playfair-display_light">Full Address</a>
                    </div>
                </div>
            </div>



            {/* footer of the footer: copyright and year */}
            <div className="footer_footer_container">
                <div>copyright</div>
                <div>Go to top</div>
            </div>

        </div>
    )
}