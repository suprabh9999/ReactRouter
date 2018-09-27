import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './components/home';
import ContactUs from './components/contactUs';
import Feedback from './components/feedback';
import Ideas from './components/ideas';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div style={{width:'90%', margin:'auto'}}>
            <h1 style={{textAlign:'center', color:'green'}}>
              We help you innovate something.</h1>
            <div style={{width:'100%',height:'10px', backgroundColor:'green'}}></div>

            <ul>
              <li style={{padding:'5px'}}> <Link to='/'> Home </Link> </li>
              <li style={{padding:'5px'}}> <Link to='/ideas'> Ideas </Link> </li> 
              <li style={{padding:'5px'}}> <Link to='/contact-us'> Contact Us </Link> </li>
              <li style={{padding:'5px'}}> <Link to='/feedback'> Feedback </Link> </li> 
            </ul>

            <Route path='/' exact component={ Home }></Route>

            <Route path='/contact-us' exact component={ ContactUs }></Route>

            <Route path='/feedback' exact component={ Feedback }></Route>

            <Route path='/ideas' component={ Ideas }></Route>
            
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
