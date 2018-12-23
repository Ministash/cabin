import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/mainPage";
import MenuPage from './components/menuPage';
import AOS from 'aos';

AOS.init();

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/menu" render={(props) => <MenuPage {...props} />} />
        </div>
      </Router>

    );
  }
}

export default App;
