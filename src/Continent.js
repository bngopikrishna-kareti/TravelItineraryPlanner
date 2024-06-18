import React,{useState} from 'react';
import { Link} from 'react-router-dom';

const Continent = () => {
    const [continent,setContinent] = useState();
    const continents = ["Africa","Asia", "Europe","NorthAmerica","SouthAmerica"]
    return (  
        <div>
            <div className="Continent">
                <div className="ContinentContent">
                    <h1>Let's Go</h1>
                    <h6>Start your journey by selecting a Continent</h6>
                </div>
                <div className="ContinentImages">
                    {continents.map(continent =>(
                        <div className="RadioButton">
                            <input  type="radio" name="Continent" value={continent} id={continent} onChange={e => setContinent(e.target.value)}/>
                            <label htmlFor={continent}>
                                <img src={"./ContinentImages/"+continent+".jpg"} alt={continent} height={200} width={200}></img>
                            </label> 
                        </div>
                    ))}
                </div>
                <Link to={`/${continent}/countries`}>
                    <button disabled={!continent?true:false}>
                    Next
                    </button>
                </Link>
            </div>
            <div className='ContinentBackground'>
                <p> Create Your Epic Trip</p>
            </div>
        </div>
    );
}
 
export default Continent;