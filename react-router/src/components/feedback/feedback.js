import React from 'react';
import './feedback.css';
import { Route, Link } from 'react-router-dom';
import FeedbackMsg from './feedbackMsg';
import data from  './feedback.json';
import { FEEDBACK_ROUTES } from '../../constants/routes';

const feedback = ({ match })=>{
    const feedbackLinks = data.feedbacks.map((feedback, index) => (
        <div key={ index }> 
            <Link title={`Feedback ${feedback.id}`} to={`${match.url}/${feedback.id}`}>{ `Feedback no.${feedback.id}` }</Link>
        </div>
    ));
    return(
        <div className='alignContainer'>
            <h2 className='feedbackHeading'> Feedbacks are really appreciated. They help us to improve and serve you better. </h2>
            <div className='flexContainer'> 
                {feedbackLinks}
            </div>
            <Route path={ match.url + FEEDBACK_ROUTES.ID} component={ FeedbackMsg }></Route>
        </div>

        
    );
}

export default feedback;