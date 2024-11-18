import React from "react";
import "./card_section_location.css";

// location.js is an object with keys: 
    //          .NAME
    //          .REGION
    //          .DIFFICULTY
    //          .HEIGHT
    //          .LENGTH
    //          .BY_CAR
    //          .BRIDGE
    //          .HUMANS
    //          .PICTURE_SMALL
    //          .TEXT_DESCRIPTION(short);

    // use ternary operator to detect if a key stores data and NOT "" (i.e: islet card don't need "difficulty" nor "height");
    // EACH SECTION SHOULD HAVE CARDS WITH DIFFERENT COLOR.
    // hover over a card triggers an event which:
    //   1. re-sets the useContext to change color in the svg map component of a specific section.
    //   2. makes the size of the card bigger, in order to show the text .description from the data.

export default function Card_section_location() {


    return (

        <div className="card_container">
            Card component.
        </div>
    )
}