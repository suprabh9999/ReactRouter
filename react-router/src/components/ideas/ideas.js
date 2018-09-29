import React from 'react';
import {Route, Link} from 'react-router-dom';
import './ideas.css';
import Agriculture  from './topics/agriculture';
import Business from './topics/business';
import Technology from './topics/technology';


const ideas = ({ match })=>{

    return(
        <div className='alignContainer'>
            <h2>You can contribute on below topics...</h2>
            <ul>
                <li style={{padding:'5px'}}> <Link to={`${match.url}/tech`}> Technology </Link></li>
                <li style={{padding:'5px'}}> <Link to={`${match.url}/business`}> Business </Link></li>
                <li style={{padding:'5px'}}> <Link to={`${match.url}/agriculture`}> Agriculture </Link></li>
            </ul>
            <div className='alignContainer'>
                <Route path={`${match.url}/tech`} component={ Technology }></Route>
                <Route path={`${match.url}/business`} component={ Business }></Route>
                <Route path={`${match.url}/agriculture`} component={ Agriculture }></Route>
            </div>
        </div>
    );
};
export default ideas;