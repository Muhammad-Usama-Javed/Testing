import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceAreas from './components/ServiceAreas';
import Services from './components/Services';
import AdditionalServices from './components/AdditionalServices';
import WhyChooseUs from './components/WhyChooseUs';
import WeatherAndMaintenance from './components/WeatherAndMaintenance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ServiceAreas />
      <Services />
      <AdditionalServices />
      <WhyChooseUs />
      <WeatherAndMaintenance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
