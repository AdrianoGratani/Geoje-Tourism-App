import React from 'react';

import locations_data from '../../../locations_data/locations_data';


// icons:
import {ReactComponent as Geoje_sea} from "../../../img/geoje_beach.svg";
import {ReactComponent as Icon_sea} from "../../../img/beach.svg";
import {ReactComponent as Icon_LightHouse} from "../../../img/faro.svg";

import "./section_map_sea.css";

export default function Section_map_sea() {

    
    return (
        <div className='map_and_icons_container'>
            <div class="single_map_section_container_sea">
                <Geoje_sea class="geoje_land_svg" style={{ 
                    // min-width etc retains the svg size over browser size changes;
                    width: '700px', 
                    minWidth: '700px',
                    maxWidth: '700px',
                    height: '850px',
                    minHeight: '850px',
                    maxHeight: '850px',
                    margin: '1vw' 
                    }} />

                    {
                        locations_data.seaside.map((sea_location) => (
                            <div className="s_icon_container"
                            style={{
                                backgroundColor: 'yellow',                                position: 'absolute',
                                top: `${sea_location.top}px`,
                                left: `${sea_location.left}px`,
                                width: 'fit-content',
                                height: 'fit-content',
                            }}>
                                {/* {sea_location.id} */}
                               <Icon_sea 
                                    style={{
                                        width: '24px', 
                                        minWidth: '24px',
                                        maxWidth: '24px',
                                        height: '24px',
                                        minHeight: '24px',
                                        maxHeight: '24px',
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

