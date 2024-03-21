import React from "react";
import { useLocation } from "react-router-dom";
const TouristAttractions = () => {
    const {selectedCountries} = useLocation().state;
    const {dates} = useLocation().state;
    const noOfDays = Math.round((dates[1].getTime()-dates[0].getTime())/(1000*3600*24))
    return (  
        <div>
            {selectedCountries}
            {noOfDays}
        </div>
    );
}
 
export default TouristAttractions;