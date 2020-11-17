import React from 'react';

const CtaComponent = props => {
    return(
        <>
            <span>{props.heading}</span>
            <p>{props.text}</p>
            <a href={'/'}>{props.button}</a>
        </>
    )
}

export default CtaComponent