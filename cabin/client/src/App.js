import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main";
import Menu from './components/menu';
import AOS from 'aos';

AOS.init();

class App extends Component {
  // state = {
  //   data: null
  // };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/api/lattes/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };


  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/menu" render={() => <Menu />} />

        </div>
      </Router>

    );
  }
}

export default App;
