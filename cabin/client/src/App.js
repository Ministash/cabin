import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/body";
import Menu from './components/menu';
import AOS from 'aos';

AOS.init();

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" render={() => <Body />} />
          <Route exact path="/menu" render={() => <Menu />} />

        </div>
      </Router>

    );
  }
}

export default App;
