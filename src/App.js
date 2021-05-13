import React, { Component, useEffect } from 'react';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Home_Sections from './components/home-sections';
import About_us from './components/about-us';
import School_Branch from './components/school-branch';
import NotFound from './components/not-found';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './components/style/nav-header.css';
import './components/style/home-sections.css'
import './components/style/about-us.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home_Sections} />
            <Route exact path='/about' component={About_us} />
            <Route exact path='/school-branch' component={School_Branch} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
