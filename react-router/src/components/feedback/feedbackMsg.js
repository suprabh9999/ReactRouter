import React from 'react';
import data from  './feedback.json';
import './feedback.css';

const feedbackMsg = ({ match })=>{
    const id = match.params.id;
    let feedbackObj={
        value:`No Feedback Received for id : ${id}`
    };
    data.feedbacks.forEach(feedback => {
        if(feedback.id === id){
            feedbackObj=feedback;
        }
    });
    
    return(
        <h3 className='feedbackMsg'>{ feedbackObj.value }</h3>
    );
}

export default feedbackMsg;
