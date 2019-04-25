import React from 'react';
import BtnQuiz from '../btnQuiz';
import ImageQuiz from '../imageQuiz';
import FormQuiz from '../formQuiz';
import ImageHero from '../../images/capitao-america.png';

export default function ContentQuiz(props){
    return(
        <div class="row justify-content-around align-items-center">
            <div class="col-3 col-md-2">
                <span>Score</span>
                <span class="score">5</span>
            </div>
            <ImageQuiz imageUrl={ImageHero} imageAlt="Capitão América" imageTitle="Capitão América" />
            
            <div class="col-12 col-md-4 my-5 my-md-0">
                <div class="mb-md-4">
                    <FormQuiz/>
                </div>

                <div class="row align-items-end justify-content-between mt-3 mt-md-5">
                <div class="col-6 col-md-6">
                    <BtnQuiz>I give up, who is it?</BtnQuiz>
                </div>
                <div class="col-6 col-md-6">
                    <BtnQuiz>Next</BtnQuiz>
                </div>
                </div>
            </div>
            </div>
    )
} 