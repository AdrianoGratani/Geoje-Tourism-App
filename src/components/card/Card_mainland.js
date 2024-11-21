import React from 'react';
import { FaMountain } from "react-icons/fa6";
import { FaPersonHiking } from "react-icons/fa6";
import { FaRightLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { useEffect } from 'react';

// import the utility to USE the context useState data:
import { useCardContext } from '../../context/CardContext';

import "./card_style.css";
import "./ext_card_mainland.css";

export default function Card_mainland({card_data, id_index}) {

    //  PROPS DATA:
    let c = card_data;
    let mainland_card_data_keys = {
        // limited size card data:
        n : c.name,
        d : c.difficulty,
        l : c.length,
        du: c.duration,
        // full card data:
        h : c.height,
        s : c.steepness,
        p : c.picture,
    };

    // CONTEXT DATA:
    const { 
            cardIsClicked, setCardIsClicked,
            currentlyVisitedSection, setCurrentlyVisitedSection,
            currentlyClickedCardID, setCurrentlyClickedCardID  
        } = useCardContext();

    // CONTEXT EVALUATOR FUNCTIONS:
    function evaluateCardClick() {
        setCardIsClicked(true);
    }

    function evaluateRendering() {                       // once big Card gets rendered, if you click on it, it will trigger other functions to set cardIsClicked to false and currentlyclickedCardID back to null.
        setCurrentlyClickedCardID(id_index);
    }

    function evaluateCurrentSection() {
        setCurrentlyVisitedSection("mainland");
    }

    function manipulateContextData() {
        evaluateCardClick();
        evaluateRendering();
        evaluateCurrentSection();
    }

    // debug:
    useEffect(()=> {
        if(id_index === currentlyClickedCardID && cardIsClicked) {
            console.log("Card_mainland.js. ID of the current card is:" + currentlyClickedCardID + "and current section is: " + currentlyVisitedSection);
        }
    }, [currentlyClickedCardID])

    return (
        
        // upper line: name;  lower line: infos.   >>> EVENT LISTENER GOES HERE TO THE CONTAINER.
                    <div className="card_mainland_container"  onClick={manipulateContextData}> 
             
                        
                        {/* SMALL CARD COMPONENT. */}
                        {/* name takes a full line. */}
                        <h1 className="card_name_mainland">
                            <div className="icon_container">
                                <FaMountain className="icon" />
                            </div>
                            <div className="mainland_text">
                                {mainland_card_data_keys.n}
                            </div>
                        </h1>
        
                        {/* additional card infos take one line altogether. */}
                        <div className="card_additional_infos">
                            <h4 className="card_difficulty">
                                <div className="icon_container">
                                    <FaPersonHiking className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.d}
                                </div>
                            </h4>
                            <h4 className="card_length">
                                <div className="icon_container">
                                    <FaRightLeft className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.l}
                                </div>
                            </h4>
                            <h4 className="card_duration">
                                <div className="icon_container">
                                    <FaClock className="icon"/>
                                </div>
                                <div className="mainland_text">
                                    {mainland_card_data_keys.du}
                                </div>
                            </h4>
                        </div>
                    </div>
    )
}
