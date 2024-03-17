import { useParams } from "react-router-dom";
import React  from "react";

import { useState, useEffect } from "react";

const Countries = () => {
    const {continent} = useParams();
    const [countries,setCountries] = useState(null);

    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/${continent}/countries/`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCountries(data);
            });
    },[continent]); 
    return ( 
        <div>
            <h1>{continent} is selected</h1>
            {countries && countries.countries.map(country =>(
                <h4>{country}</h4>
            )
            )}
        </div>
    );       
}
 
export default Countries;