import React from 'react';

import icon_calendar from '../../resouces/images/icons/calendar.png';
import icon_location from '../../resouces/images/icons/location.png';

import Zoom from 'react-reveal/Zoom';

const VenueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">

                                

                                    <div className="vn_inner">
                                        <div className="vn_icon_square bck_red"></div>
                                        <div
                                            className="vn_icon" 
                                            style={{
                                                background: `url(${icon_calendar})`
                                            }}
                                        ></div>
                                        <div className="vn_title">
                                            Event Date & Time
                                        </div>
                                        <div className="vn_desc">
                                            7 August 2019 @10.00 pm
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={1000} delay={1000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                        className="vn_icon" 
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        7 August 2019 @10.00 pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
            
        </div>
    );
};

export default VenueNfo;