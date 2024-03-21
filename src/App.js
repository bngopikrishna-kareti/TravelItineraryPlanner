import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'; 
import Home from './Home';
import Continent from './Continent';
import Countries from './Countries';
import StartJourney from './StartJourney';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/continents" element={<Continent/>} />
        <Route path="/:continent/countries" element={<Countries />} />
        <Route path="/StartJourney" element={<StartJourney />} />
      </Routes>
    </Router>
  );
}

export default App;
