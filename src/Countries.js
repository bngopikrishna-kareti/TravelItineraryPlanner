import { useParams } from "react-router-dom";
import React  from "react";

const Countries = () => {
    const {continent} = useParams();
    return ( 
        <h1>{continent} is selected</h1>
    );
}
 
export default Countries;