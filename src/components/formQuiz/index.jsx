import React from 'react';
import BtnQuiz from '../btnQuiz';

export default function FormQuiz(props){
    return(
        <form>
            <div className="form-group mb-0">
            <label for="marvelCharacter">Whats is the name of this Marvel Character?</label>
            <input type="text" className="form-control" id="marvelCharacter" aria-describedby="marvelCharacter" placeholder="Write here" />
            </div>
            <BtnQuiz>Answer</BtnQuiz> 
        </form>
    )
} 