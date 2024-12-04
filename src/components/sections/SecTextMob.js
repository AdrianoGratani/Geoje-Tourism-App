import React from 'react';
import {useState , useEffect  } from 'react';
import { useCardContext } from '../../context/CardContext';
import "./sectextmob.css";

export default function SecTextMob() {

    const { 
        cmi, setCmi,                  // for rendering/fading
        mc, setMc,                    // for data
    } = useCardContext();

    function r() {         //  handle removal of card
        setCmi(null);      // no clicked icons anymore in ctx
        setMc(null);       // and no data.
    }

    const [c, setC] = useState(0);   // 1  ?   call r() as effect;   // used to gentle removal of card text 
    const [noText, setNoText] = useState(0) // 1 = remove the text from rendering
    
    //a. REMOVE TEXT FROM CARD
    useEffect(()=> {     // monitor c if changes.
        if(c) {
            // wait the text removal transition to happen vefore removing THE TEXT.
            setTimeout(() => {
               setNoText(1);
            }, 500);
        }
    } ,[c])  ;

    //b.  REMOVE THE CARD 
    useEffect(()=> {     // monitor c if changes.
        if(c) {
            // wait the text removal transition to happen vefore removing the whole.
            setTimeout(() => {
                r();
            }, 1000);
        }
    } ,[c])  ;
    
    if(cmi===null) return <div></div>   // base case

    switch(mc.s) {       // different layout (and DATA) for each location.
        case 'm': {      
            return (
                <div 
                className={`stmc ${c ? 'rem' : ''}`} 
                onClick={()=> setC(1)} // remove the card.
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    {/*  THE TEXT */}
                {
                    noText ? "" :
                    <div>
                        <h1 class={`stmc ${c ? 'remt' : ''}`}
                        >{mc.name}</h1>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.height}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.difficulty}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.length}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.steepness}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.duration}</p>
                        </div>
                        <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>{mc.description}</p>
                        </div>
                    </div>
                }
                    
                </div>
              )
        };
        case 's': {      
            return (
                <div className={`stmc ${c ? 'rem' : ''}`} onClick={()=> setC(1)}
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                                {/*  THE TEXT */}
                {
                    noText ? "" :
                    <div>
                        <h1 className={`stmc ${c ? 'remt' : ''}`}
                        >{mc.name}</h1>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p className={`stmc ${c ? 'remt' : ''}`}>{mc.sand}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.parking}</p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>{mc.cafes}</p>
                        </div>
                        <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>{mc.description}</p>
                        </div>
                    </div>
                }

                </div>
              )
        };

        case 'i': {      
            return (
                <div className={`stmc ${c ? 'remt' : ''}`} onClick={()=> setC(1)}
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    <h1 className={`stmc ${c ? 'remt' : ''}`}
                    >{mc.name}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p className={`stmc ${c ? 'remt' : ''}`}>{mc.sand}</p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>{mc.car}</p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>{mc.eat}</p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>{mc.bridge}</p>
                    </div>
                    <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>{mc.description}</p>
                    </div>
                </div>
              )
        }
    }
}