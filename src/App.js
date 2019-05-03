import React, { Component } from 'react';
import Login from './components/login/login';
import Landing from './components/landing/landing';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      // All routes will get this by default { match, location, history }
      <BrowserRouter>
      <div>
      <Route path="/login" component={Login}/>
      <Route path="/landing" component={Landing}/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
