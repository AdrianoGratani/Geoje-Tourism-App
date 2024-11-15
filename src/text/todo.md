[CORREGGI]
la nuvola che si muove da sinistra, falla partire da destra.


## create the header of the menu with proper html css and some animations

## write text descriptions for each text. use todoist website as guidline for structure, different font sizes, content structure.

## create different color versions for each map

## create a scroll effect in the menu for each section like todoist.

                body, html {
                    margin: 0;
                    padding: 0;
                    overflow: hidden; /* Prevent default scrolling */
                }

                main {
                    height: 100vh; /* Full viewport height */
                    overflow-y: auto; /* Enable scrolling */
                    scroll-behavior: smooth; /* Smooth scrolling */
                }

                .first_section {
                    height: 100vh; /* Each section takes full height */
                    display: flex;
                    align-items: center; /* Center content vertically */
                    justify-content: center; /* Center content horizontally */
                    background: #f0f0f0; /* Background color */
                }



                // css

                <main>
                    <div className="first_section" id="section1">
                        {/* Content for section 1 */}
                    </div>
                    <div className="first_section" id="section2">
                        {/* Content for section 2 */}
                    </div>
                    <div className="first_section" id="section3">
                        {/* Content for section 3 */}
                    </div>
                </main>



                // jsx

                import React, { useEffect } from 'react';

                export default function Menu_page() {
                    const sections = document.querySelectorAll('.first_section');

                    const handleScroll = (event) => {
                        event.preventDefault();
                        const delta = Math.sign(event.deltaY);
                        const currentIndex = [...sections].findIndex((section) => {
                            return section.getBoundingClientRect().top >= 0;
                        });
                        
                        if (delta > 0 && currentIndex < sections.length - 1) {
                            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
                        } else if (delta < 0 && currentIndex > 0) {
                            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
                        }
                    };

                    useEffect(() => {
                        window.addEventListener('wheel', handleScroll, { passive: false });
                        return () => {
                            window.removeEventListener('wheel', handleScroll);
                        };
                    }, []);

                    return (
                        <main>
                            <div className="first_section" id="section1">
                                {/* Content for section 1 */}
                            </div>
                            <div className="first_section" id="section2">
                                {/* Content for section 2 */}
                            </div>
                            <div className="first_section" id="section3">
                                {/* Content for section 3 */}
                            </div>
                        </main>
                    );
                }
