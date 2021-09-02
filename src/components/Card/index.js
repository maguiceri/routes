import React from 'react';
import "./styles.scss"

function Card(props){
    return(
        <div className="card">
            <img className="img" src={props.name.thumbnail}></img>
            <p>{props.name.price}</p>
        </div>
    )
}

export default Card;