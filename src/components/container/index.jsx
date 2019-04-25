import React from 'react';

export default function Container(props){
    return(
        <main class="container">
            {
                props.children
            }
        </main>
    )
} 