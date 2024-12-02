// the about me is an "animation" components, made by me using moslty  CSS.

import React from 'react';
import "./about.css";
import {useState , useEffect} from 'react';
import Sun from '../../components/animated/sun/Sun';
import Moon from '../../components/animated/moon/Moon';
import Cloud_one from '../../components/animated/clouds/Cloud_one';
import { ScreenContextProvider } from '../../context/ScreenSizeContext';
import { useNavigate } from 'react-router-dom';

export default function About () {

    const [o, setO] = useState(false);    // smooth transition to page;
    const nb = useNavigate();             // navigate back using handler navigation function;
    const hn=() => {                      // the handler;
        nb('/'); 
    }

    useEffect(()=>{
        if(o) {
            const i = setInterval(()=> {
                hn();
            }, 500);
            return  ()=> clearInterval(i);
        }
        else return;
    }, [o]);

    return (
        <ScreenContextProvider>
            <div className={`abc ${o ? "d" : null}`}  >
                <div className="abtc">
                    <div className='mar'>
                        I made this website using the React library. <br />
                        Most of the style is in plain and simple CSS. <br />
                        Keyframes for all the animations are 'hand-made', except for <a href="https://foolishdeveloper.com/css-wave-animation/">this</a>. <br />
                        @media queries and event listeners given to Context data,  are used to evaluate to set the layout
                        accordingly to user interface. 
                        <br />
                        Everything is coded by me, and 
                        the source code is available <a href="https://github.com/AdrianoGratani/Geoje-Tourism-App">here</a>.
                        <br />
                        Icons are taken mainly from <code><a href="https://react-icons.github.io/react-icons/">react-icons</a></code> npm package.
                        <br />
                        For the footer component, I've taken inspiration from <a href="https://debut.studio">here</a>.
                        <br />
                        <br />
                </div>

                {/* BUTTON  */}
                <div className="abbc"
                    onClick={()=>setO(true)}>
                        <i> Go back to the Website </i>
                </div>

            </div>

                <Sun />
                <Moon/>
                <Cloud_one />

            </div>
        </ScreenContextProvider>
    )
}