import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Map, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const TouristAttractions = () => {
    const {selectedCountries} = useLocation().state;
    const {dates} = useLocation().state;
    let noOfDays = Math.round((dates[1].getTime()-dates[0].getTime())/(1000*3600*24));
    noOfDays = noOfDays === 0? 1: noOfDays;
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
    const [selectedPlace,setSelectedPlace] = useState();
    const [dropDown,setdropDown] = useState(false);
    let travelItinerary =useRef({});
    const [selectedtouristAttraction,setSelectedtouristAttraction] = useState(null);
    const addPlaceToItinerary = (day,selectedCountry) =>{
        if(
        !travelItinerary.current[day].includes(selectedCountry.cid)){
            travelItinerary.current[day].push(selectedCountry.cid);
        }
        console.log(travelItinerary.current);

    } 
    
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/touristAttractions/?countries=${selectedCountries}`)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setTouristAttractions(data);
        });
        let itineraryDict ={}
        for(let value=0;value<noOfDays;value++){
            itineraryDict[value+1] =[];
        }
        travelItinerary.current = itineraryDict;
        console.log(travelItinerary.current);
    },[selectedCountries,noOfDays]);

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
                            setSelectedPlace(touristAttraction);
                            }}>
                            <img src={touristAttraction.imageUrls} alt={touristAttraction.title} width="10px" height="10px"/>
                        </button>
                    </Marker>
                ))}
                {selectedPlace && (
                     <Popup longitude={selectedPlace.longitude} latitude={selectedPlace.latitude}
                     anchor="bottom"
                     onClose={()=>setSelectedPlace(null)}
                     closeOnClick={false}>
                        <div>
                            <h1>{selectedPlace.title}</h1>
                            <h6>{selectedPlace.address}</h6>
                        </div>
                    </Popup>)}
                </Map>
                {touristAttractions && touristAttractions.tourist_attractions.map(touristAttraction =>(
                    <div className="placeCards">
                        <div className="placeImage">
                            <img src={touristAttraction.imageUrls} alt={touristAttraction.title}/>
                        </div>
                        <div className="placeInfo">
                            <h1>{touristAttraction.title}</h1>
                            <h6>{touristAttraction.address}</h6>
                        </div>
                        <div className="addButton">
                            <button className="plusButton" onClick={()=>{
                                setSelectedtouristAttraction(touristAttraction);
                                setdropDown(!dropDown);
                            }}>
                                <img src="Plus_symbol.png" alt="plus"/>
                            </button>
                            {dropDown && touristAttraction===selectedtouristAttraction && (
                                    Object.keys(travelItinerary.current).map(key =>(
                                            <ul>
                                                <button className="listButton" 
                                                onClick={evt =>{
                                                    setdropDown(!dropDown);
                                                    addPlaceToItinerary(evt.target.value,selectedtouristAttraction);
                                                }} 
                                                value={key}>
                                                    Day{key}
                                                </button>
                                            </ul>
                                        )) 
                                )}
                        </div>
                    </div>
                    ))
                }
                <Link to='/travelItinerary' state={{travelItinerary:travelItinerary, touristAttractions:touristAttractions, dates:dates}} >
                    <button class="saveButton" disabled={travelItinerary?false:true}>
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default TouristAttractions;