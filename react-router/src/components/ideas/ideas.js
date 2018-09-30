import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './ideas.css';
import Agriculture  from './topics/agriculture';
import Business from './topics/business';
import Technology from './topics/technology';
import { IDEAS_ROUTES } from '../../constants/routes';
import PageNotFound from '../pageNotFound';

const ideas = ({ match })=>{

    return(
        <div className='alignContainer'>
            <h2>You can contribute on below topics...</h2>
            
            <ul>
                <li className='links'> 
                    <Link title="Technology" to={ match.url + IDEAS_ROUTES.TECHNOLOGY }> Technology </Link>
                </li>

                <li className='links'> 
                    <Link title="Business" to={ match.url + IDEAS_ROUTES.BUSINESS }> Business </Link>
                </li>

                <li className='links'> 
                    <Link title="Agriculture" to={ match.url + IDEAS_ROUTES.AGRICULTURE }> Agriculture </Link>
                </li>
            </ul>

            <div className='alignContainer'>
                <Switch>
                    <Redirect exact from="/ideas" to="/ideas/technology"></Redirect>
                    <Route path={ match.url + IDEAS_ROUTES.TECHNOLOGY } component={ Technology }></Route>
                    <Route path={ match.url + IDEAS_ROUTES.BUSINESS } component={ Business }></Route>
                    <Route path={ match.url + IDEAS_ROUTES.AGRICULTURE } component={ Agriculture }></Route>
                    <Route component={ PageNotFound }></Route>
                </Switch>
            </div>
        </div>
    );
};
export default ideas;