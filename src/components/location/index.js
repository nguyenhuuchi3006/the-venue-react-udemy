import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4938102646806!2d106.762995414117!3d10.849995960799916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527a1fc80477b%3A0x62944f7a73c84aaf!2zVmluY29tIFRo4bunIMSQ4bupYw!5e0!3m2!1svi!2s!4v1552733286461" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen ></iframe>

            
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;