import React from 'react';
import { Link } from 'react-router-dom';
import data from  './feedback.json';
import './feedback.css';

const feedbackLinks = ()=>{
    const feedbackLinks = data.feedbacks.map((feedback, index) => (
        <div key={ index }> 
            <Link to={`/feedback/${feedback.id}`}>{ `Feedback no.${feedback.id}` }</Link>
        </div>
    ));
    return(
        <div className='flexContainer'>
            { feedbackLinks }
        </div>
    );
}
export default feedbackLinks;


