import React from 'react';
import "./styles.scss"

function Card(props){
    return(
        <div className="card">
            <p>{props.item.title}</p>
            <img className="img" src={props.item.thumbnail}></img>
            <p>{props.item.price}</p>

        </div>
    )
}

export default Card;