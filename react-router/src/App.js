import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './components/home/home';
import ContactUs from './components/contactUs/contactUs';
import Feedback from './components/feedback/feedback';
import Ideas from './components/ideas/ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className='alignContainer'>
            <h1 style={{textAlign:'center', color:'green'}}>
              We help you Innovate your Ideas !!
            </h1>

            <div style={{width:'100%',height:'10px', backgroundColor:'green'}} />

            <ul>
              <li style={{padding:'5px'}}> <Link to='/'> Home </Link> </li>
              <li style={{padding:'5px'}}> <Link to='/ideas'> Ideas </Link> </li> 
              <li style={{padding:'5px'}}> <Link to='/contact-us'> Contact Us </Link> </li>
              <li style={{padding:'5px'}}> <Link to='/feedback'> Feedback </Link> </li> 
            </ul>

            <Route path='/' exact component={ Home }></Route>

            <Route path='/contact-us' exact component={ ContactUs }></Route>

            <Route path='/feedback' component={ Feedback }></Route>

            <Route path='/ideas' component={ Ideas }></Route>
               
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
