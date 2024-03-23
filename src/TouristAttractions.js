import React from "react";
import { useLocation } from "react-router-dom";
const TouristAttractions = () => {
    const {selectedCountries} = useLocation().state;
    const {dates} = useLocation().state;
    const noOfDays = Math.round((dates[1].getTime()-dates[0].getTime())/(1000*3600*24))
    return (  
        <div className="touristAttractions">
            <div className="map-div">
                <h1>Map</h1>
            </div>
            
        </div>
    );
}
 
export default TouristAttractions;