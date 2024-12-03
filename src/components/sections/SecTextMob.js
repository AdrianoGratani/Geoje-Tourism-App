import React from 'react';
import { useEffect, useState } from 'react';
import { useCardContext } from '../../context/CardContext';
import { useScreenContext } from '../../context/ScreenSizeContext';
import ExtMainland from '../extended_cards/extended_card_mainland/ExtMainland';
import ExtSeaside from '../extended_cards/extended_card_seaside/ExtSeaside';
import ExtIslets from '../extended_cards/extended_card_islets/ExtIslets';
import "./sectextmob.css";

export default function SecTextMob() {
    
    
    const { 
        cmi, setCmi,                  // for rendering/fading
        mc, setMc,                    // for data
        currentlyVisitedSection,      // for layout

        toggle_animation, setToggle_animation,
        resetContextData
    } = useCardContext();

    switch(mc.s) {       // different layout (and DATA) for each location.
        case 'm': {      
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