import { useLocation,Link } from "react-router-dom";
import React, { useState } from 'react';
import Calendar from "react-calendar";

const StartJourney = () => {
    const {selectedCountries} = useLocation().state;
    const [dates,setDates] = useState([new Date(),new Date()]);
    const onChange = date =>{
        setDates(date);

    }
    return (  
        <div className="Calendar">
            <div className="Calendar-div">
                <h1>Select your trip dates</h1>
                <div className="Calendar-margin">
                    <div className="react-calendar">
                        <Calendar value={dates} onChange={onChange} minDate={new Date()} selectRange={true}/>
                    </div>
                </div>
                <Link to="/touristAttractions" state={{selectedCountries:selectedCountries , dates:dates}} >
                <button className="Calendar-div-next-button">
                    next
                </button>
            </Link>
            </div>
            <div className="Calendar-background-image">
                <p> Create your Epic Journey</p>
            </div>
        </div>
    );
}
 
export default StartJourney;