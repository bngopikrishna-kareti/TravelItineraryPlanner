import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import ReactMapGL from "react-map-gl";
const TouristAttractions = () => {
    // const {selectedCountries} = useLocation().state;
    // const {dates} = useLocation().state;
    // const noOfDays = Math.round((dates[1].getTime()-dates[0].getTime())/(1000*3600*24));
    const [viewPort, setViewPort] = useState(
        {
            latitude: 45.4211,
            longitude: -75.6903,
            width: "100vw",
            height: "100vh",
            zoom: 10

        }
    );
    return (  
        <div className="touristAttractions">
            <div className="map-div">
                <ReactMapGL {...viewPort} 
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onMove={evt => setViewPort(evt.viewState)}
                >
                    markers here

                </ReactMapGL>
            </div>
            
        </div>
    );
}
 
export default TouristAttractions;