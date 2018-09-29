import React from 'react';
import data from  './feedback.json';

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
        <h3 style={{marginLeft:"20px", color:"Red"}}>{ feedbackObj.value }</h3>
    );
}

export default feedbackMsg;
