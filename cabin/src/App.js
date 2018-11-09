import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/"
          render={() => <Main />} />
      </Router>

    );
  }
}

export default App;
