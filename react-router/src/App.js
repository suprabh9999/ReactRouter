import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Home from './components/home/home';
import ContactUs from './components/contactUs/contactUs';
import Feedback from './components/feedback/feedback';
import Ideas from './components/ideas/ideas';
import './App.css';
import { APP_ROUTES } from './constants/routes';
import PageNotFound from './components/pageNotFound';
import logo from './assets/img/innovation.gif';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className='alignContainer'>
        
            <NavLink style={{display:"inline-block", marginRight:"20%", }} to={ APP_ROUTES.HOME }>
              <img title="Innovation is achievement" style={{verticalAlign:"middle", borderRadius:'50px', marginBottom:'5px'}} 
                height="80px" width="80px" src={logo} alt="Icon"/>
            </NavLink>

            <h1 className='heading' style={{display:"inline-block"}}>
              We help you Innovate your Ideas !!
            </h1>

            <div className='under-line-partition' />

            <ul>
              <li className='links'> 
                <NavLink exact title="Home" activeClassName='active-link' to={ APP_ROUTES.HOME }> Home </NavLink> 
              </li>

              <li className='links'> 
                <NavLink title="Ideas" activeClassName='active-link' to={ APP_ROUTES.IDEAS }> Ideas </NavLink> 
              </li> 

              <li className='links'> 
                <NavLink title="Contact Us" activeClassName='active-link' 
                  to={ APP_ROUTES.CONTACT_US }> Contact Us </NavLink> 
              </li>

              <li className='links'>
                <NavLink title="Feedback" activeClassName='active-link' 
                  to={ APP_ROUTES.FEEDBACK }> Feedback </NavLink>
              </li>

            </ul>

            <Switch>
              <Redirect exact from="/ReactRouter/" to={ APP_ROUTES.HOME }></Redirect>

              <Route path={ APP_ROUTES.HOME } exact component={ Home }></Route>

              <Route path={ APP_ROUTES.CONTACT_US }  component={ ContactUs }></Route>

              <Route path={ APP_ROUTES.FEEDBACK } component={ Feedback }></Route>

              <Route path={ APP_ROUTES.IDEAS } component={ Ideas }></Route>

              <Route component={ PageNotFound }></Route>
            </Switch>  

        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
