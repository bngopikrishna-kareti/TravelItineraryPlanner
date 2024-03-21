import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'; 
import Home from './Home';
import Continent from './Continent';
import Countries from './Countries';
import StartJourney from './StartJourney';
import TouristAttractions from './TouristAttractions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/continents" element={<Continent/>} />
        <Route path="/:continent/countries" element={<Countries />} />
        <Route path="/startJourney" element={<StartJourney />} />
        <Route path="/touristAttractions" element={<TouristAttractions />} />
      </Routes>
    </Router>
  );
}

export default App;
