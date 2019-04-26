import React from 'react';

export default function InputQuiz(props){

    return(
        
        <div className="form-group mb-0">
            <label for={props.idInput}>{props.label}</label>
            <input type="text" className="form-control" id={props.idInput} aria-describedby={props.idInput} placeholder={props.placeholder} />
        </div>
        
    )
} 