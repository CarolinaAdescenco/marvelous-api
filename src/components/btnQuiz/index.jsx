import React from 'react';

export default function BtnQuiz(props){

    let style = `${props.styleBtn}`

    return(
        <div className={style}>
            <button class="btn btn-answer btn-block">{props.textButton}</button> 
        </div>
    )
} 