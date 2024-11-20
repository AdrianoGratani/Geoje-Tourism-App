import React from 'react';
import Header from "./header/Header";
import Main from "./Main";
// import Footer from "./Footer";
import "./body.css"
// this whole content must go into About Me page.


export default function Body() {
    return(
        <body >
            <div class="body_elements_container" id="body_elements_container">
                <Header />   {/* NB: outer header container background color is inherited, BUT children has opacity set to 0 to 'inherit' night color element on transition smoothly  */}
                {/* animated elements inside Main */}
                <Main />
                
                {/* <Footer /> */}
            </div>
               
        </body>
    );
}