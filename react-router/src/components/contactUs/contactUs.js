import React from 'react';
import './contactUs.css';
import CustomLink from './customLink/customLink';
import { Route, Switch } from 'react-router-dom';
import DomesticAddress from './address/domesticAdd';
import InterAddress from './address/internationAdd';
import { CONTACTUS_ROUTES } from '../../constants/routes';
import PageNotFound from '../pageNotFound';


const contactus = ({ match })=> {
    return(
        <div className='alignContainer'>
            <h2> Contact us for any innovations. </h2>
            <CustomLink activeOnlyWhenExact={true}  to={match.url + CONTACTUS_ROUTES.DOMESTIC_OFFICE} 
                label="Office India" />
            <CustomLink  to={match.url + CONTACTUS_ROUTES.INTERNATIONAL_OFFICE} label="Office US" />
            
            <Switch>
                <Route path={match.url + CONTACTUS_ROUTES.DOMESTIC_OFFICE} exact component={ DomesticAddress }></Route>
                <Route path={match.url + CONTACTUS_ROUTES.INTERNATIONAL_OFFICE} exact component={ InterAddress }></Route>
                <Route component={ PageNotFound }></Route>
            </Switch>
            
        </div>
    );
};



export default contactus;