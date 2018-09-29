import React from 'react';
import './feedback.css';
import { Route } from 'react-router-dom';
import FeedbackMsg from './feedbackMsg';
import FeedbackLinks from './feedbackLinks';

const feedback = ({ match })=>{
    console.log(match);
    return(
        <div className='alignContainer'>
            <h2 className='feedbackHeading'> Feedbacks are really appreciated. They help us to improve and serve you better. </h2>
            {FeedbackLinks()}
            <Route path={`${match.url}/:id`} component={ FeedbackMsg }></Route>
        </div>

        
    );
}

export default feedback;