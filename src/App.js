import React, { Component } from 'react';

import './resouces/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';

class App extends Component {
  render() {
    return (
      <div style = {{
        backgroundColor: "lightBlue",
        height: '1105px'
      }}>
        <Header/>
        <Featured/>
        <VenueNfo/>
      </div>
    );
  }
}

export default App;
