import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './components/home/home';
import ContactUs from './components/contactUs/contactUs';
import Feedback from './components/feedback/feedback';
import Ideas from './components/ideas/ideas';
import './App.css';
import { APP_ROUTES } from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className='alignContainer'>
            <h1 className='heading'>
              We help you Innovate your Ideas !!
            </h1>

            <div className='under-line-partition' />

            <ul>
              <li className='links'> <Link to={ APP_ROUTES.HOME }> Home </Link> </li>
              <li className='links'> <Link to={ APP_ROUTES.IDEAS }> Ideas </Link> </li> 
              <li className='links'> <Link to={ APP_ROUTES.CONTACT_US }> Contact Us </Link> </li>
              <li className='links'> <Link to={ APP_ROUTES.FEEDBACK }> Feedback </Link> </li> 
            </ul>

            <Route path={ APP_ROUTES.HOME } exact component={ Home }></Route>

            <Route path={ APP_ROUTES.CONTACT_US }  component={ ContactUs }></Route>

            <Route path={ APP_ROUTES.FEEDBACK } component={ Feedback }></Route>

            <Route path={ APP_ROUTES.IDEAS } component={ Ideas }></Route>
               
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
