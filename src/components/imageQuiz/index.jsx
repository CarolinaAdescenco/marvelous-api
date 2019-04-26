import React from 'react';

export default function ImageQuiz(props){

    // Variável para dar versatilidade à quantidade de colunas que a imagem ocupará
    let col = `${props.imageCol} mx-auto mx-md-0`;
    
    return(
        <div className={col}>
            <img src={props.imageUrl} alt={props.imageAlt} title={props.imageTitle} className="img-fluid"/>
        </div>
    )
} 