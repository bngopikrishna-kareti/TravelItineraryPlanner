import { useParams } from "react-router-dom";
import React  from "react";
import { useState, useEffect } from "react";

const Countries = () => {
    const {continent} = useParams();
    const [countries,setCountries] = useState(null);
    const [filteredCountries,setfilteredCountries] = useState(null);

    const selectedCountry = (input) =>{
        if (input != null && countries){
            const filtercountries = countries.countries.filter((country) => country.toLowerCase().includes(input));
            setfilteredCountries(filtercountries);
        }
        else if(input == null && countries){
            setfilteredCountries(countries.countries);
        }
    }
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/${continent}/countries/`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCountries(data);
                setfilteredCountries(data.countries);
            });
    },[continent]); 
    return ( 
        <div className="Countries">
            <input list="countriesList" placeholder="Search" onChange={(e) => selectedCountry([e.target.value.toLocaleLowerCase()])}/>
            <datalist id="countriesList">
                {countries && countries.countries.map(country =>(
                    <option>{country}</option>
                ))}
            </datalist>
            <h1>{continent} is selected</h1>
            {filteredCountries && filteredCountries.map(country =>(
               <h1>{country}</h1>
            ))}
        </div>
    );       
}
 
export default Countries;