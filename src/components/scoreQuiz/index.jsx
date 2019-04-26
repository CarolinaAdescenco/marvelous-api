import React from 'react';

export default function ScoreQuiz(props){

    let col = `${props.colScore} text-center`
    
    return(
        <div className={col}>
            <p>Score</p>
            <span className="score">{props.scoreQuiz}</span>
        </div>
    )
} 