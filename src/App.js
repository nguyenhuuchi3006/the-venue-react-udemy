import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resouces/styles.css';

class App extends Component {
  render() {
    return (
      <div style = {{
        backgroundColor: "lightBlue",
        height: '1105px'
      }}>
        <Header></Header>
      </div>
    );
  }
}

export default App;
