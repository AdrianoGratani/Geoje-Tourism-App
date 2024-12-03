import React from 'react';
import {useState , useEffect  } from 'react';
import { useCardContext } from '../../context/CardContext';
import "./sectextmob.css";

export default function SecTextMob() {
    const { 
        cmi, setCmi,                  // for rendering/fading
        mc, setMc,                    // for data
    } = useCardContext();

    const [c, setC] = useState(0);   // 1  ?   call r() as effect;

    function r() {         //  handle removal of card
        setCmi(null);      // no clicked icons anymore in ctx
        setMc(null);       // and no data.
    }

    useEffect(()=> {
        if(c) {
            r();
        }
    } ,[c])  ;
    
    if(cmi===null) return <div></div>   // base case

    switch(mc.s) {       // different layout (and DATA) for each location.
        case 'm': {      
            return (
                <div className="stmc" onClick={()=> setC(1)} // remove the card.
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    <h1 class="mh"
                    >{mc.name}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p className='mpp'>{mc.height}</p>
                        <p className='mpp'>{mc.difficulty}</p>
                        <p className='mpp'>{mc.length}</p>
                        <p className='mpp'>{mc.steepness}</p>
                        <p className='mpp'>{mc.duration}</p>
                    </div>
                    <p className='mpp'>{mc.description}</p>
                </div>
              )
        };
        case 's': {      
            return (
                <div className="stmc"
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    <h1 class="mh"
                    >{mc.name}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p className='mpp'>{mc.height}</p>
                        <p className='mpp'>{mc.difficulty}</p>
                        <p className='mpp'>{mc.length}</p>
                        <p className='mpp'>{mc.steepness}</p>
                        <p className='mpp'>{mc.duration}</p>
                    </div>
                    <p className='mpp'>{mc.description}</p>
                </div>
              )
        };

        case 'i': {      
            return (
                <div className="stmc"
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    <h1 class="mh"
                    >{mc.name}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p className='mpp'>{mc.height}</p>
                        <p className='mpp'>{mc.difficulty}</p>
                        <p className='mpp'>{mc.length}</p>
                        <p className='mpp'>{mc.steepness}</p>
                        <p className='mpp'>{mc.duration}</p>
                    </div>
                    <p className='mpp'>{mc.description}</p>
                </div>
              )
        }
    }
}