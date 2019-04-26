import React from 'react';
import BtnQuiz from '../btnQuiz';
import InputQuiz from '../inputQuiz';

export default function FormQuiz(props){

    let style = `${props.styleForm}`

    return(

        <div className={style}>
            <form>
                <InputQuiz idInput="marvelCharacter" label="Whats is the name of this Marvel Character?" placeholder="Write here" />
                <BtnQuiz textButton="Answer" /> 
            </form>
        </div>
    )
} 