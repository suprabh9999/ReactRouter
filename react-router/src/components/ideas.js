import React,{Component} from 'react';
import {Route, Link} from 'react-router-dom';

const ideas = ({ match })=>{

    return(
        <div style={{width:'90%', margin:'auto'}}>
            <h2>You can contribute on below topics...</h2>
            <ul>
                <li> <Link to={`${match.url}/tech`}> Technology </Link></li>
                <li> <Link to={`${match.url}/business`}> Business </Link></li>
                <li> <Link to={`${match.url}/agriculture`}> Agriculture </Link></li>
            </ul>

            <Route path={`${match.url}/tech`} component={()=><h2> Tech Idea...</h2>}></Route>
            <Route path={`${match.url}/business`} component={()=><h2> Business Idea...</h2>}></Route>
            <Route path={`${match.url}/agriculture`} component={()=><h2> Agriculture Idea...</h2>}></Route>
        </div>
    );
};
export default ideas;