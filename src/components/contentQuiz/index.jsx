import React from 'react';
import BtnQuiz from '../btnQuiz';
import ImageQuiz from '../imageQuiz';
import FormQuiz from '../formQuiz';
import ScoreQuiz from '../scoreQuiz';
import ImageHero from '../../images/capitao-america.png';
import ImageLogo from '../../images/marvel-logo.jpg';

export default function ContentQuiz(props){
    return(

        <div>
            {/* Logo Marvel */}
            <ImageQuiz imageCol="col-10 col-md-3" imageUrl={ImageLogo} imageAlt="Marvel" imageTitle="Marvel" />

            <div className="row justify-content-around align-items-center">
                
                {/* Score */}
                <ScoreQuiz colScore="col-3 col-md-2 mb-5 md-md-0" scoreQuiz="3" />
                
                {/* Image Hero API */}
                <ImageQuiz imageUrl={ImageHero} imageAlt="Capitão América" imageTitle="Capitão América" imageCol="col-10 col-md-5" />
                
                <div className="col-12 col-md-4 my-5 my-md-0">                    
                    <FormQuiz styleForm="mb-md-4"/>                    

                    <div className="row align-items-end justify-content-between mt-3 mt-md-5">
                        <BtnQuiz styleBtn="col-6 col-md-6" textButton="I give up, who is it?" />
                        <BtnQuiz styleBtn="col-6 col-md-6" textButton="Next" />
                    </div>
                </div>
            </div>
        </div>

    )
} 