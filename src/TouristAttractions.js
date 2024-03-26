import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Map, { Marker, Popup } from "react-map-gl";
const TouristAttractions = () => {
    const {selectedCountries} = useLocation().state;
    // const {dates} = useLocation().state;
    // const noOfDays = Math.round((dates[1].getTime()-dates[0].getTime())/(1000*3600*24));
    const [touristAttractions,setTouristAttractions] = useState();
    const [viewPort, setViewPort] = useState(
        {
            latitude: 51.504501,
            longitude: -0.086500,
            width: "100vw",
            height: "100vh",
            zoom: 15

        }
    );
    const [selectedPlace,setSelectedPlace] = useState(null);
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/touristAttractions/?countries=${selectedCountries}`)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            console.log(data);
            setTouristAttractions(data);
        });

    },[selectedCountries]);
    return (  
        <div className="touristAttractions">
            <div className="map-div">
                <Map {...viewPort} 
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onMove={evt => setViewPort(evt.viewState)}
                >
                {touristAttractions && touristAttractions.tourist_attractions.map(touristAttraction =>(
                    <Marker key={touristAttraction.cid} latitude={touristAttraction.latitude} longitude={touristAttraction.longitude}>
                        <button onClick={e => {
                            e.preventDefault();
                            setSelectedPlace(touristAttraction);
                            }}>
                            <img src={touristAttraction.imageUrls} alt={touristAttraction.title} width="10px" height="10px"/>
                        </button>
                    </Marker>
                ))}
                {
                    console.log(selectedPlace)
                }
                {selectedPlace && (
                    <Popup latitude={selectedPlace.latitude} longitude={selectedPlace.longitude}>
                        <h1>{selectedPlace.title}</h1>
                        <h6>{selectedPlace.address}</h6>
                    </Popup>
                )
                }
                </Map>
            </div>
            
        </div>
    );
}
 
export default TouristAttractions;