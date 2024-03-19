import { useParams } from "react-router-dom";
import React  from "react";
import { useState, useEffect } from "react";

const Countries = () => {
    const {continent} = useParams();
    const [countries,setCountries] = useState(null);
    const [filteredCountries,setfilteredCountries] = useState(null);
    const [checkedList,setcheckedList] = useState({});

    const setChecked = (country) =>{
        var value = {};
        if(country in checkedList)
        {
            value[country] = !checkedList[country];
            setcheckedList(checkedList =>({
                ...checkedList,
                ...value
            }));
        }
        else{
            value[country] = true;
            setcheckedList(checkedList => ({
                ...checkedList,
                ...value
            }));
        }
    }


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
            <div className="countryImages">
                {filteredCountries && filteredCountries.map(country =>(
                    <div className="countryImage">
                        <input type="checkbox" value={country} name={country} id={country} 
                        checked={country in checkedList?checkedList[country]:false} onChange={(e) => setChecked(e.target.value)}
                        />
                        <label htmlFor={country}>
                            <img src={'/CountryImages/'+country+'.jpeg'} alt={country}/>
                            <p>{country}</p>
                        </label>
                    </div>     
                ))}
            </div>
        </div>
    );       
}
 
export default Countries;