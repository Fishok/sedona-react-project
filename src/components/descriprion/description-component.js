import React from 'react';
import classes from './description.module.css'

const DescriptionComponent = props => {
    return(
        <div className={classes.li +" col-12 col-md-4"}>
            <h3>{props.heading}</h3>
            <span>{props.number}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default DescriptionComponent