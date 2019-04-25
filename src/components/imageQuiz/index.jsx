import React from 'react';

export default function ImageQuiz(props){
    return(
        <div className="col-10 col-md-3 mx-auto mx-md-0">
            <img src={props.imageUrl} alt={props.imageAlt} title={props.imageTitle} className="img-fluid"/>
        </div>
    )
} 