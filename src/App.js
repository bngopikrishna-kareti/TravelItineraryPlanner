import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'; 
import Home from './Home';
import Continent from './Continent';
import Countries from './Countries';
import StartJourney from './StartJourney';
import TouristAttractions from './TouristAttractions';
import TravelItinerary from './TravelItinerary';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/continents" element={<Continent/>} />
        <Route path="/:continent/countries" element={<Countries />} />
        <Route path="/startJourney" element={<StartJourney />} />
        <Route path="/touristAttractions" element={<TouristAttractions />} />
        <Route path="/travelItinerary" element={<TravelItinerary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
