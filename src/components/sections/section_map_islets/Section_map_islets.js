import React from 'react';
import { useEffect, useState } from 'react';
import {ReactComponent as Geoje_islets} from "../../../img/geoje_islets.svg";
import {ReactComponent as Svg_islets} from "../../../img/islet.svg";
import { useCardContext } from '../../../context/CardContext';
import "./section_map_islets.css";

// icon data rendering:
import locations_data from '../../../locations_data/locations_data';

export default function Section_map_islets() {
    const icons_islets_data = locations_data.islets;                                                // data for icon positioning.

    // previous method: no ext card on icon hover
    // function handle_icon_hovered_context(set_case, set_data) {
    //     switch(set_case) {
    //         case "set_context":
    //             setCurrentlyHoveredIcon(set_data);
    //             break;
            
    //         case "delete_context":
    //             setCurrentlyHoveredIcon(set_data);
    //             break;
    //     }
    // }
    // CONTEXT DATA for icon layout - card layout interactions:
    const {
        resetContextData,
        toggle_animation, setToggle_animation,
        currentlyHoveredIcon, setCurrentlyHoveredIcon, 
        currentlyHoveredCard,
        cardIsClicked, setCardIsClicked,
        currentlyVisitedSection, setCurrentlyVisitedSection,
        clickedIcon, setClickedIcon,
        card_data_for_ext_card, setCard_data_for_ext_card,
    } = useCardContext();



     // ___ON HOVER
     function send_icon_id_to_context(location_id, location_data) {
        setToggle_animation(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCardIsClicked(true);
        setCurrentlyVisitedSection("islets");
        setCard_data_for_ext_card(location_data);
    }
    function remove_icon_id_from_context() {
        // setToggle_animation(false);
        //     setCurrentlyHoveredIcon(null);
        //     setClickedIcon(null);
        //     setCardIsClicked(false);
        //     setCurrentlyVisitedSection(null);
        //     setCard_data_for_ext_card(null);
    }

    // on icon click:
    const [icon_toggled, setIcon_toggled] = useState(false);

    function triggerExtCard() {
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);
            // setClickedIcon(null);
            // setCardIsClicked(false);
            // setCurrentlyVisitedSection(null);
            // setCard_data_for_ext_card(null);
    }
    
    useEffect(()=> {
    // console.log(
    //     cardIsClicked, currentlyVisitedSection
    // )
        // console.log(". currently hovered icon: " + currentlyHoveredIcon);      // debug;
    }, [icon_toggled])


    // debug:
    // useEffect(()=> {
    //     console.log(currentlyHoveredCard);
    // },[currentlyHoveredCard]);

    return (
        <div class="map_and_icons_container"
             onClick={()=> resetContextData()}>

            {/* map svg */}            
            <div class="single_map_section_container islet_map">
                <Geoje_islets class="geoje_islets_svg" style={{ 
                    // min-width etc retains the svg size over browser size changes;
                    width: '700px', 
                    minWidth: '700px',
                    maxWidth: '700px',
                    height: '850px',
                    minHeight: '850px',
                    maxHeight: '850px',
                    margin: '1vw' 
                    }} 
                />

                 {/* map icons svg ------>  use .map() to generate them dynamically, 
            with INLINE CSS for the container too. the container must have an ID
                retrieve cohordinates for top and left from an array of objects:
                MountainLocations = [
                    {
                        name: LocationName,
                        top: x,
                        y: y
                    },
                    {
                        name: LocationName,
                        top: x,
                        y: y
                    },
                    ...etc ...etc
                ]
            */}
 
            {/* data maping -> icon container -> icon */}
            {
                icons_islets_data.map((islet)=> (

                    <div 
                    // if currentlyHoveredCard state is same as the islet.id, add some style to make the icon stand out:
                    className={`is_icon_container ${currentlyHoveredCard === islet.id
                                                    ? "is_icon_effect"
                                                    : ""                                
                    }`}

                    onMouseEnter={()=> send_icon_id_to_context(islet.id, islet)}
                    onClick={()=> triggerExtCard()}
                    style={{
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        top: `${islet.top}px`,
                        left: `${islet.left}px`,
                    }}
                    >
                    {/* {islet.id} */}
                        <Svg_islets
                            style={{
                                width: '35px', 
                                minWidth: '35px',
                                maxWidth: '35px',
                                height: '35px',
                                minHeight: '35px',
                                maxHeight: '35px',
                                margin: '3px',
                            }}
                        />
                    </div>
                ))
            }
            </div>
        </div>
    )
}