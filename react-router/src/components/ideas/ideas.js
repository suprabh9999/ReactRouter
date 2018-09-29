import React from 'react';
import {Route, Link} from 'react-router-dom';
import './ideas.css';
import Agriculture  from './topics/agriculture';
import Business from './topics/business';
import Technology from './topics/technology';
import { IDEAS_ROUTES } from '../../constants/routes';


const ideas = ({ match })=>{

    return(
        <div className='alignContainer'>
            <h2>You can contribute on below topics...</h2>
            
            <ul>
                <li className='links'> 
                    <Link to={ match.url + IDEAS_ROUTES.TECHNOLOGY }> Technology </Link>
                </li>

                <li className='links'> 
                    <Link to={ match.url + IDEAS_ROUTES.BUSINESS }> Business </Link>
                </li>

                <li className='links'> 
                    <Link to={ match.url + IDEAS_ROUTES.AGRICULTURE }> Agriculture </Link>
                </li>
            </ul>

            <div className='alignContainer'>
                <Route path={ match.url + IDEAS_ROUTES.TECHNOLOGY } component={ Technology }></Route>
                <Route path={ match.url + IDEAS_ROUTES.BUSINESS } component={ Business }></Route>
                <Route path={ match.url + IDEAS_ROUTES.AGRICULTURE } component={ Agriculture }></Route>
            </div>
        </div>
    );
};
export default ideas;