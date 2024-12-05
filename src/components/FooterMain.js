import React from 'react';
import {useState, useEffect} from 'react';
import "./footer_main.css";

//to change footer animation text, based on screen sizes:
import { useScreenContext } from '../context/ScreenSizeContext';

function FooterTextAnimation({textIn, intrvl}) {

    const [currCharsDisplayed, setCurrCharsDisplayed ] = useState('');   
    const [i, setI] = useState(0)
    const [rand, setRand] = useState(100 + Math.random() * 400);

    useEffect(()=> {                                            // update the text every time the current Chars displayed increase/change

            const interval = setInterval(()=> {        

                        setRand(                                       /// random set of interval
                            Math.floor(50 + Math.random() * 300)
                        )

                        setCurrCharsDisplayed((prev) => {              /// show the next char
                            if (prev.length >= textIn.length) {
                                return '';
                            } else {
                                return prev += textIn[i]
                            }
                        });

                        setI( (prev) => {                            // update the char pointer to the next (or first)
                            if (prev === textIn.length) {return prev-prev}
                            else {return prev += 1}
                        });

                    }, rand);

            return ()=> clearInterval(interval);  //to prevent weird effects;
    },[ currCharsDisplayed])


    return (
        <div  
        // style={{ width: (rand) + 'px' }}
        >
            <div>
            {currCharsDisplayed}
            </div>
        </div>
    )

       
}

export default function FooterMain() {
    // if you don't desctructure context data as obj, it will return the whole obj.
    const {screenMode, es} = useScreenContext();
    const ev=(s)=> {
        if (s==='large') {return "desktop"};
        return s;
    }

    let animStr = es() !== 'mobile' 
        ? `  Welcome to the ${ev(screenMode)} version for my Website.        ` 
        :  `  Welcome to my Mobile Website.        `;

    return (
// {/*  A PICTURE MAYBE?  */}
// {/* https://ifonts.xyz/almarena-neue-font-family.html    for the animation */}
// {/* https://fonnts.com/cotoris/   for the form description text  */}
// {/* https://www.1001freefonts.com/bodoni.font   elegant. */}

        <div className="footer_container playfair-display_it_light">

            <div className="footer_header_container ">
                <div className="footer_header_left">
                    <div className="footer_header_logo_container im-fell-great-primer-regular">
                         A | G
                    </div>
                    <div className="footer_header_job_container">
                        Adriano Gratani, <br /> FrontEnd Developer.
                    </div>
                    <div className="footer_header_address_container">
                        Geoje, <br /> South Korea.
                    </div>
                </div>

                {
                    es() !== 'mobile'
                    ?
                        <div className="footer_header_right playfair-display_light">
                            <div className="footer_header_aboutme link">
                                <a href="#">My Journey</a>
                            </div>
                            <div className="footer_header_method link">
                                <a href="#">Work Ethic</a>
                            </div>
                            <div className="footer_header_code link">
                                <a href="#">My Code</a>
                            </div>
                        </div>
                    
                    :   null
                }

            </div>

            <div class="footer_animation_container playfair-display_light">
                <div class="a">
                    <FooterTextAnimation textIn={animStr} interval={1000} />
                </div>
            </div>
            
            <div className="footer_form_links_container">
                
                <div className="footer_form_container">
                    <div className="footer_form_description_container playfair-display_light">
                        {
                            es() !== 'mobile' ? 
                            "Contact me for further discussion about Frontend development"
                            : "Send me an e-mail:"
                        }
                    </div>
                    <div className="footer_form_container">

                        <form class="footer_form">
                            <div>
                                <placeholder class="placeholder_name" id="name">Your Name: </placeholder>
                                <input  type="text" id="name" class="input_name" />
                            </div>
                                <br/> 
                            <div>
                                <placeholder class="placeholder_mail" id="email">Your Email: </placeholder>
                                <input type="email" id="email" class="input_name" />
                            </div>
                            <div>
                                <textarea placeholder="Type here" />
                            </div>
                        </form>
                        <div class="footer_button_container">
                            <button class="footer_button">Send Email</button>
                        </div>
                    </div>
                </div>

                <div className="footer_links_container">
                    <div className="footer_links_social_container">
                        <h1 class="links_title ">
                        <FooterTextAnimation textIn={"   My Links!    "} interval={1000} />
                            </h1>
                        <a href="#" class="link playfair-display_light">GitHub</a>
                        <a href="#" class="link playfair-display_light">LinkedIn</a>
                        <a href="#" class="link playfair-display_light">Youtube</a>
                        <a href="#" class="link playfair-display_light">CV</a>
                        
                        {
                            es() !== 'mobile' 
                                ? 
                                    <div className="footer_signature_container">
                                        <div className="footer_signature playfair-display_light">
                                            Adriano Gratani
                                        </div>
                                    </div>

                                : null
                        }
                    </div>
                    <div className="footer_links_addresses_container">
                        <h1 class="hello_title">
                            <FooterTextAnimation textIn={"   _Say 'hello!'   "} interval={1000} />
                            
                            </h1>
                        <a href="#" class="link playfair-display_light">Mail</a>
                        <a href="#" class="link playfair-display_light">Telephone</a>
                        <a href="#" class="link playfair-display_light">Full Address</a>
                    </div>
                </div>
            </div>

            {
                            es() === 'mobile'

                                ? 
                                    <div className="footer_signature_container">
                                        <div className="footer_signature playfair-display_light">
                                            Adriano Gratani
                                        </div>
                                    </div>

                                : null
                        }

            {
                            es() !== 'mobile'

                                ? 
                                    <div className="footer_footer_container">
                                        <div>Copyright</div>
                                        <div>Go to top</div>
                                    </div>

                                : null
            }

        </div>
    )
}