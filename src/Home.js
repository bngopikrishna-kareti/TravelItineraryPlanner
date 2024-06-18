import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (  
        <div className="HomeScreen">
            <Navbar />
              <div className="HomeScreenContent">
                <h1>Revolutionize Travel Planning</h1>
                <h3>A New Era for Travel ---- Fast & Easy</h3>
                <Link to="/Continents">
                    <button>
                    create your Journey
                    </button>
                </Link>
              </div>
          </div>
    );
}
 
export default Home;
