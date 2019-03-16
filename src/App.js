import React, { Component } from 'react';

import './resouces/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/highlight/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div style = {{
        backgroundColor: "lightBlue",
        height: '1105px'
      }}>
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venuenfo">
          <VenueNfo/>
        </Element>
        <Element name="highlights">
          <Highlight/>
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
