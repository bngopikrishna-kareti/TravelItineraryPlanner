import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Calendar from "react-calendar";
import dateFormat from "dateformat";

const StartJourney = () => {
    const {selectedCountries} = useLocation().state;
    const [startDate,setStartDate] = useState(new Date());
    const [daysCount,setDaysCount] = useState();

    const onChange = date =>{
        setStartDate(date);
        getDaysCount();
    }
    const getDaysCount = () =>{
        setDaysCount((dateFormat(startDate[1],'dd')-dateFormat(startDate[0],'dd')) + 1);
        console.log(daysCount);
    }
    return (  
        <div>
            {selectedCountries.map(country =>(
            <h1>{country}</h1>

        ))}
        <div className="react-calendar">
            <Calendar value={startDate} onChange={onChange} minDate={new Date()} selectRange={true}/>
        </div>
        </div>
        
    );
}
 
export default StartJourney;