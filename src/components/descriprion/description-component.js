import React from 'react';

const DescriptionComponent = props => {
    return(
        <li>
            <h3>{props.heading}</h3>
            <span>{props.number}</span>
            <p>{props.text}</p>
        </li>
    )
}

export default DescriptionComponent